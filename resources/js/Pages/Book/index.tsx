import React from 'react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import BookCard from '@/Pages/Book/Partials/BookCard'
import { Input } from "@/Components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"

interface BookIndexProps extends PageProps {
    books: App.Data.BookData[]
    genres: App.Data.GenreData[]
}

export default function BookIndex({ books, genres }: BookIndexProps) {
    const [selectedGenre, setSelectedGenre] = React.useState<string>('')
    const [searchTerm, setSearchTerm] = React.useState('')

    const filteredBooks = books.filter((book) => {
        const matchesGenre = selectedGenre ? book.genres.some(genre => genre.id.toString() === selectedGenre) : true
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesGenre && matchesSearch
    })

    return (
        <AppLayout>
            <div className="space-y-6">
                <h1 className="text-3xl font-bold">Our Library Collection</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Select onValueChange={setSelectedGenre} value={selectedGenre}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Genre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0">All Genres</SelectItem>
                            {genres.map((genre) => (
                                <SelectItem key={genre.id} value={genre.id.toString()}>{genre.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        placeholder="Search books..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}
