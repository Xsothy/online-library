import React, {useEffect} from 'react'
import { router } from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"
import {useToast} from "@/hooks/use-toast";

interface BookShowProps extends PageProps {
    book: App.Data.BookData
    userRent: App.Data.RentData | null
    userReserve: App.Data.ReservationData | null
}

export default function BookShow({ book, userRent, userReserve, flash }: BookShowProps) {
    const handleRent = () => {
        router.visit(route('book.rent', book.id))
    }

    const handleReserve = () => {
        router.visit(route('book.reserve', book.id))
    }

    return (
        <AppLayout>
            <Card className="max-w-2xl mx-auto">
                <div className="sm:flex">
                    <div className="sm:w-1/3 aspect-[1/1.6] relative">
                        <img
                            src="/placeholder.svg?height=512&width=320"
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
                                {book.isAvailable && !userRent && !userReserve && (
                                    <Button onClick={handleRent} className="w-full">Rent</Button>
                                )}
                                {!book.isAvailable && !userRent && !userReserve && (
                                    <Button onClick={handleReserve} className="w-full">Reserve</Button>
                                )}
                                {userRent && (
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <p>You have rented this book until {userRent.dueAt}</p>
                                    </div>
                                )}
                                {userReserve && (
                                    <div className="p-4 bg-primary/10 rounded-md">
                                        <p>You have reserved this book. We'll notify you when it's available.</p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" onClick={() => router.get(route('book.index'))} className="w-full">
                                Back to Book List
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </AppLayout>
    )
}
