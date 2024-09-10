import React from 'react'
import { router } from '@inertiajs/react'
import { toast } from 'sonner'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Badge } from "@/Components/ui/badge"

interface RentPageProps extends PageProps {
    book: App.Data.BookData
}

export default function RentPage({ book }: RentPageProps) {
    const [duration, setDuration] = React.useState(7)
    const firstInventory = book.inventories[0]

    const handleRent = (e: React.FormEvent) => {
        e.preventDefault()
        router.post(route('book.rent.create', book.id), { duration })
    }

    return (
        <AppLayout>
            <Card className="max-w-2xl mx-auto">
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
                            <CardTitle>Rent Book: {book.title}</CardTitle>
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
                                {firstInventory && (
                                    <p className="font-semibold">Rent Price: ${firstInventory.rentPrice.toFixed(2)} per day</p>
                                )}
                                <form onSubmit={handleRent} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="duration">Rent Duration (days)</Label>
                                        <Input
                                            id="duration"
                                            type="number"
                                            value={duration}
                                            onChange={(e) => setDuration(Number(e.target.value))}
                                            min="1"
                                        />
                                    </div>
                                    {firstInventory && (
                                        <p className="font-semibold">
                                            Total Cost: ${(duration * firstInventory.rentPrice).toFixed(2)}
                                        </p>
                                    )}
                                    <Button type="submit" className="w-full">Confirm Rent</Button>
                                </form>
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
