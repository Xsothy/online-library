import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Textarea } from "@/Components/ui/textarea"

interface CommentSectionProps {
    bookId: number
    comments: App.Data.CommentData[]
}

export default function CommentSection({ bookId, comments }: CommentSectionProps) {
    const [replyingTo, setReplyingTo] = useState<number | null>(null)

    const commentForm = useForm({
        body: '',
        parentId: null as number | null,
    })

    const submitComment = (e: React.FormEvent) => {
        e.preventDefault()
        commentForm.post(route('book.comment', bookId), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                commentForm.reset()
                setReplyingTo(null)
            },
        })
    }

    const renderComment = (comment: App.Data.CommentData, depth = 0) => (
        <div key={comment.id} className={`mb-4 ${depth > 0 ? 'ml-8' : ''}`}>
            <div className="flex items-center space-x-2">
                <span className="font-semibold">{comment.createdBy.name}</span>
                <span className="text-sm text-muted-foreground">{comment.createdAt}</span>
            </div>
            <p className="mt-1">{comment.body}</p>
            <Button
                variant="link"
                onClick={() => setReplyingTo(comment.id)}
                className="mt-1 p-0 h-auto"
            >
                Reply
            </Button>
            {replyingTo === comment.id && (
                <form onSubmit={submitComment} className="mt-2">
                    <Textarea
                        placeholder="Write a reply..."
                        value={commentForm.data.body}
                        onChange={(e) => commentForm.setData('body', e.target.value)}
                    />
                    <div className="mt-2 space-x-2">
                        <Button type="submit" disabled={commentForm.processing}>
                            Send Reply
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setReplyingTo(null)}>
                            Cancel
                        </Button>
                    </div>
                </form>
            )}
            {comment.replies?.map((reply) => renderComment(reply, depth + 1))}
        </div>
    )

    return (
        <Card id="comments">
            <CardHeader>
                <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submitComment} className="mb-4">
                    <Textarea
                        placeholder="Write a comment..."
                        value={commentForm.data.body}
                        onChange={(e) => commentForm.setData('body', e.target.value)}
                    />
                    <Button type="submit" className="mt-2" disabled={commentForm.processing}>
                        Send Comment
                    </Button>
                </form>
                {comments.map((comment) => renderComment(comment))}
            </CardContent>
        </Card>
    )
}
