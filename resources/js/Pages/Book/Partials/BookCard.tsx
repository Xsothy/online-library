import React from 'react'
import { Link } from '@inertiajs/react'
interface BookCardProps {
    book: App.Data.BookData
}

export default function BookCard({ book }: BookCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <p className="text-sm text-gray-500">Published: {book.publish_at}</p>
                <div className="mt-4">
                    <Link
                        href={`/book/${book.id}`}
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
