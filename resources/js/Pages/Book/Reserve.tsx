import React from 'react'
import { router } from '@inertiajs/react'
import { toast } from 'sonner'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"

interface ReservePageProps extends PageProps {
    book: App.Data.BookData
}

export default function ReservePage({ book }: ReservePageProps) {
    const [isReserving, setIsReserving] = React.useState(false)

    const handleReserve = () => {
        setIsReserving(true)
        router.post(route('book.reserve.create', book.id))
        setIsReserving(false)
    }

    return (
        <AppLayout>
            <Card className="max-w-3xl mx-auto">
                <div className="sm:flex">
                    <div className="sm:w-1/3 aspect-[1/1.6] relative">
                        <img
                            src="/placeholder.png?height=512&width=320"
                            alt={book.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="sm:w-2/3">
                        <CardHeader>
                            <CardTitle>Reserve Book: {book.title}</CardTitle>
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
                                <p>
                                    This book is currently unavailable. By reserving, you'll be notified when it becomes available for rent.
                                </p>
                                <Button onClick={handleReserve} disabled={isReserving} className="w-full">
                                    {isReserving ? 'Reserving...' : 'Confirm Reservation'}
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" onClick={() => router.visit(route('book.show', book.id))} className="w-full">
                                Back to Book Details
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </AppLayout>
    )
}
