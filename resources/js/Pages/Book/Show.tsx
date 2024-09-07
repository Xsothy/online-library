import React from 'react'
import { router } from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import RentForm from '@/Pages/Book/Partials/RentForm'
import ReserveButton from '@/Pages/Book/Partials/ReserveButton'
import BookCard from '@/Pages/Book/Partials/BookCard'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"

interface BookShowProps extends PageProps {
    book: App.Data.BookData
    relatedBooks: App.Data.BookData[]
}

export default function BookShow({ book, relatedBooks }: BookShowProps) {
    const [isRenting, setIsRenting] = React.useState(false)
    const [isReserving, setIsReserving] = React.useState(false)
    const firstInventory = book.inventories[0]
    const isAvailable = book.isAvailable

    const handleRent = (duration: number) => {
        router.post(`/book/${book.id}/rent`, { duration })
    }

    const handleReserve = () => {
        router.post(`/book/${book.id}/reserve`)
    }

    return (
        <AppLayout>
            <Card className="mb-8">
                <CardHeader>
                    <img
                        src="/placeholder.svg?height=300&width=600"
                        alt={book.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <CardTitle>{book.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {book.genres.map((genre) => (
                            <Badge key={genre.id} variant="secondary">
                                {genre.name}
                            </Badge>
                        ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{book.description}</p>
                    <p className="text-sm text-muted-foreground mb-2">Published: {book.publish_at}</p>
                    {firstInventory && (
                        <>
                            <p className="text-lg font-semibold mb-2">Price: ${firstInventory.price.toFixed(2)}</p>
                            <p className="text-lg font-semibold mb-4">Rent Price: ${firstInventory.rent_price.toFixed(2)} per day</p>
                        </>
                    )}
                    <p className="text-lg font-medium mb-4">
                        Status: {isAvailable ? 'Available' : 'Not Available'}
                    </p>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    {isAvailable && (
                        isRenting ? (
                            <RentForm onSubmit={handleRent} onCancel={() => setIsRenting(false)} />
                        ) : (
                            <Button onClick={() => setIsRenting(true)}>
                                Rent Now
                            </Button>
                        )
                    )}

                    {!isAvailable && (
                        <ReserveButton
                            bookId={book.id}
                            onReserve={handleReserve}
                            isReserving={isReserving}
                            setIsReserving={setIsReserving}
                        />
                    )}
                </CardFooter>
            </Card>

            {relatedBooks.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-4">Related Books</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedBooks.map((relatedBook) => (
                            <BookCard key={relatedBook.id} book={relatedBook} />
                        ))}
                    </div>
                </div>
            )}
        </AppLayout>
    )
}
