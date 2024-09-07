import React, { useState } from 'react'
import {PageProps} from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import RentForm from '@/Pages/Book/Partials/RentForm'
import ReserveButton from '@/Pages/Book/Partials/ReserveButton'
import {router, usePage} from "@inertiajs/react";
import BookData = App.Data.BookData;

interface BookShowProps {
    book: BookData
}

export default function BookShow({ book }: BookShowProps) {
    const auth = usePage<PageProps>().props.auth
    const [isRenting, setIsRenting] = useState(false)
    const [isReserving, setIsReserving] = useState(false)

    const handleRent = (duration: number) => {
        router.post(`/book/${book.id}/rent`, { duration })
    }

    const handleReserve = () => {
        router.post(`/book/${book.id}/reserve`)
    }

    return (
        <AppLayout auth={auth}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
                    <p className="text-gray-600 mb-4">{book.description}</p>
                    <p className="text-sm text-gray-500 mb-2">Published: {book.publish_at}</p>
                    <p className="text-lg font-semibold mb-2">Price: ${book.inventories[0].price.toFixed(2)}</p>
                    <p className="text-lg font-semibold mb-4">Rent Price: ${book.inventories[0].rent_price.toFixed(2)} per day</p>
                    <div className="mt-6 space-y-4">
                        {isRenting ? (
                            <RentForm onSubmit={handleRent} onCancel={() => setIsRenting(false)} />
                        ) : (
                            <button
                                onClick={() => setIsRenting(true)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            >
                                Rent Now
                            </button>
                        )}

                        <ReserveButton
                            bookId={book.id}
                            onReserve={handleReserve}
                            isReserving={isReserving}
                            setIsReserving={setIsReserving}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
