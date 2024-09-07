import React from 'react'
import { Link } from '@inertiajs/react'
import {PageProps} from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import BookCard from '@/Pages/Book/Partials/BookCard'
import {usePage} from "@inertiajs/react";

interface BookIndexProps {
    books: App.Data.BookData[]
}

export default function BookList({ books }: BookIndexProps) {
    const auth = usePage<PageProps>().props.auth
    return (
        <AppLayout auth={auth}>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Our Library Collection</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}
