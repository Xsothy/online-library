import React from 'react'
import { Link } from '@inertiajs/react'
import { Card, CardContent, CardFooter } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"

interface BookCardProps {
    book: App.Data.BookData
    layout: 'grid' | 'list'
}

export default function BookCard({ book, layout }: BookCardProps) {
    return (
        <Card className={`overflow-hidden ${layout === 'list' ? 'flex' : 'flex-col'}`}>
            <div className={`${layout === 'list' ? 'w-1/3' : 'w-full'} ${layout === 'list' ? 'aspect-[1.6/1]' : 'aspect-[1/1.3]'} relative`}>
                <img
                    src="/placeholder.svg?height=512&width=320"
                    alt={book.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className={`${layout === 'list' ? 'w-2/3' : 'w-full'}`}>
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{book.description}</p>
                    <p className="text-sm text-muted-foreground mb-2">Published: {book.publish_at}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {book.genres.slice(0, 3).map((genre) => (
                            <Badge key={genre.id} variant="secondary">
                                {genre.name}
                            </Badge>
                        ))}
                    </div>
                    <p className="text-sm font-medium">
                        Status: {book.isAvailable ? 'Available' : 'Not Available'}
                    </p>
                </CardContent>
                <CardFooter className="p-4">
                    <Button asChild className="w-full">
                        <Link href={`/book/${book.id}`}>
                            View Details
                        </Link>
                    </Button>
                </CardFooter>
            </div>
        </Card>
    )
}
