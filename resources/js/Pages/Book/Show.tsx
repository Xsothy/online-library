import React, { useState, useEffect } from 'react'
import { Link, router, useForm } from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"
import { Star } from 'lucide-react'
import BookCard from '@/Pages/Book/Partials/BookCard'
import CommentSection from '@/Pages/Book/Partials/CommentSection'

interface BookShowProps extends PageProps {
    book: App.Data.BookData
    userRent: App.Data.RentData | null
    userReservation: App.Data.ReservationData | null
    relatedBooks: App.Data.BookData[]
}

export default function BookShow({ book, userRent, userReservation, relatedBooks }: BookShowProps) {
    const [userRating, setUserRating] = useState(0)

    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [])

    const handleRent = () => {
        router.visit(route('book.rent', book.id))
    }

    const handleReserve = () => {
        router.visit(route('book.reserve', book.id))
    }

    const submitRating = (rating: number) => {
        setUserRating(rating)
        // Submit rating logic here
    }

    const averageRating = book.reviews.reduce((acc, review) => acc + review.rating, 0) / book.reviews.length

    return (
        <AppLayout>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                    <Card className="sticky top-4">
                        <CardContent className="p-4">
                            <div className="aspect-[1/1.6] relative mb-4">
                                <img
                                    src={book.cover?.path || "/placeholder.png?height=512&width=320"}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <strong>Your Rating:</strong>
                                    <div className="flex mt-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`h-6 w-6 cursor-pointer ${
                                                    star <= userRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`}
                                                onClick={() => submitRating(star)}
                                                onMouseEnter={() => setUserRating(star)}
                                                onMouseLeave={() => setUserRating(0)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {book.isAvailable && !userRent && !userReservation && (
                                    <Button onClick={handleRent} className="w-full">Rent</Button>
                                )}
                                {!book.isAvailable && !userRent && !userReservation && (
                                    <Button onClick={handleReserve} className="w-full">Reserve</Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:w-3/4">
                    <div className="space-y-8">
                        <Card id="overview">
                            <CardHeader>
                                <CardTitle>{book.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p><strong>Author:</strong> {book.author}</p>
                                    <p><strong>Description:</strong> {book.description}</p>
                                    <p><strong>Published:</strong> {book.publishedAt}</p>
                                    <div className="flex items-center space-x-2">
                                        <strong>Average Rating:</strong>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`h-5 w-5 ${
                                                        star <= averageRating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span>({book.reviews.length} reviews)</span>
                                    </div>
                                    <p><strong>Total Comments:</strong> {book.comments.length}</p>
                                    <div>
                                        <strong>Genres:</strong>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {book.genres.map((genre) => (
                                                <Badge key={genre.id} variant="secondary">
                                                    {genre.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card id="related-books">
                            <CardHeader>
                                <CardTitle>Related Books</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {relatedBooks.map((relatedBook) => (
                                        <BookCard key={relatedBook.id} book={relatedBook} layout="grid" />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <CommentSection bookId={book.id} comments={book.comments} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
