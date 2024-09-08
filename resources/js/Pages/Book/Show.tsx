import React from 'react'
import { Link, useForm , router} from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"
import { Textarea } from "@/Components/ui/textarea"
import { StarIcon } from 'lucide-react'
interface BookShowProps extends PageProps {
    book: App.Data.BookData
    userRent: App.Data.RentData | null
    userReservation: App.Data.ReservationData | null
    relatedBooks: App.Data.BookData[]
}

export default function BookShow({ book, userRent, userReservation, relatedBooks }: BookShowProps) {
    const commentForm = useForm({
        body: '',
    })

    const handleRent = () => {
        // Navigate to rent page
        router.visit(route('book.rent', book.id))
    }

    const handleReserve = () => {
        // Navigate to reserve page
        router.visit(route('book.reserve', book.id))
    }

    const submitRating = (rating: number) => {
        // Submit rating
    }

    const submitComment = (e: React.FormEvent) => {
        e.preventDefault()
        commentForm.post(route('book.comment', book.id), {
            preserveScroll: true,
            preserveState: true,
        })
    }

    return (
        <AppLayout>
            <div className="space-y-6">
                <Card className="max-w-2xl mx-auto">
                    <div className="sm:flex">
                        <div className="sm:w-1/3 aspect-[1/1.6] relative">
                            <img
                                src={book.cover?.path || "/placeholder.svg?height=512&width=320"}
                                alt={book.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="sm:w-2/3">
                            <CardHeader>
                                <CardTitle>{book.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">{book.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {book.genres.map((genre) => (
                                            <Badge key={genre.id} variant="secondary">
                                                {genre.name}
                                            </Badge>
                                        ))}
                                    </div>
                                    <p className="font-semibold">Published: {book.publishedAt}</p>
                                    {book.isAvailable && !userRent && !userReservation && (
                                        <Button onClick={handleRent} className="w-full">Rent</Button>
                                    )}
                                    {!book.isAvailable && !userRent && !userReservation && (
                                        <Button onClick={handleReserve} className="w-full">Reserve</Button>
                                    )}
                                    {userRent && (
                                        <div className="p-4 bg-primary/10 rounded-md">
                                            <p>You have rented this book until {userRent.dueAt}</p>
                                        </div>
                                    )}
                                    {userReservation && (
                                        <div className="p-4 bg-primary/10 rounded-md">
                                            <p>You have reserved this book. We'll notify you when it's available.</p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </div>
                    </div>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Rating and Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                    key={star}
                                    className={`h-6 w-6 ${
                                        star <= (book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length)
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                    } cursor-pointer`}
                                    onClick={() => submitRating(star)}
                                />
                            ))}
                            <span className="text-sm text-muted-foreground">
                ({book.reviews.length} {book.reviews.length === 1 ? 'review' : 'reviews'})
              </span>
                        </div>
                        {book.reviews.map((review) => (
                            <div key={review.id} className="mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">{review.createdBy.name}</span>
                                    <span className="text-sm text-muted-foreground">{review.createdAt}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <StarIcon
                                            key={star}
                                            className={`h-4 w-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
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
                        {book.comments.map((comment) => (
                            <div key={comment.id} className="mb-4">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold">{comment.createdBy.name}</span>
                                    <span className="text-sm text-muted-foreground">{comment.createdAt}</span>
                                </div>
                                <p>{comment.body}</p>
                                {/* Implement reply feature here */}
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Related Books</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {relatedBooks.map((relatedBook) => (
                                <Link key={relatedBook.id} href={route('book.show', relatedBook.id)} className="block">
                                    <div className="aspect-[1/1.6] relative mb-2">
                                        <img
                                            src={relatedBook.cover?.path || "/placeholder.svg?height=320&width=200"}
                                            alt={relatedBook.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-semibold">{relatedBook.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}
