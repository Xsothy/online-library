import React from 'react'
import { Link } from '@inertiajs/react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"

interface BookCardProps {
    book: App.Data.BookData
}

export default function BookCard({ book }: BookCardProps) {
    const isAvailable = book.isAvailable

    return (
        <Card>
            <CardHeader>
                <img
                    src="/placeholder.svg?height=200&width=300"
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{book.description}</p>
                <p className="text-sm text-muted-foreground mb-2">Published: {book.publish_at}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {book.genres.map((genre) => (
                        <Badge key={genre.id} variant="secondary">
                            {genre.name}
                        </Badge>
                    ))}
                </div>
                <p className="text-sm font-medium mb-4">
                    Status: {isAvailable ? 'Available' : 'Not Available'}
                </p>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={`/book/${book.id}`}>
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
