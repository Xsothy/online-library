import React from 'react'
import {router, usePage} from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Badge } from "@/Components/ui/badge"
import {useAction} from "@/hooks/action.hook";
import {cn} from "@/lib/utils";

interface RentPageProps extends PageProps {
    book: App.Data.BookData
}

export default function RentPage({ book }: RentPageProps) {
    const firstInventory = book.inventories[0]
    const props = usePage<App.Data.ShareData>().props;
    const userId = props.auth?.user.id;
    if (!userId) {
        return <div>Please login to rent this book</div>
    }
    const { data, setData, submit, errors, processing } = useAction('book-rent', {
        id: book.id,
        duration: 7
    })

    const handleRent = (e: React.FormEvent) => {
        e.preventDefault()
        submit()
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
                                            className={cn(
                                                errors.duration && 'text-destructive border-destructive',
                                            )}
                                            id="duration"
                                            type="number"
                                            value={data.duration}
                                            onChange={(e) => setData('duration', Number(e.target.value))}
                                            min="1"
                                        />
                                        { errors.duration && <p className="text-destructive">{errors.duration}</p>}
                                    </div>
                                    {firstInventory && (
                                        <p className="font-semibold">
                                            Total Cost: ${(data.duration * firstInventory.rentPrice).toFixed(2)}
                                        </p>
                                    )}
                                    <Button type="submit" className="w-full" disabled={processing}>
                                        Confirm Rent { processing ? '...' : '' }
                                    </Button>
                                </form>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                onClick={() => router.visit(route('book.show', book.id))}
                                className="w-full"
                                disabled={processing}
                            >
                                Back to Book Details { processing ? '...' : '' }
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </AppLayout>
    )
}
