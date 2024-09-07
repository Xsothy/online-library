import React from 'react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import BookCard from '@/Pages/Book/Partials/BookCard'
import LayoutToggle from '@/Pages/Book/Partials/LayoutToggle'
import { Input } from "@/Components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"

interface BookIndexProps extends PageProps {
    books: App.Data.BookData[]
    genres: App.Data.GenreData[]
}

export default function BookIndex({ books, genres }: BookIndexProps) {
    const [selectedGenre, setSelectedGenre] = React.useState<string>('')
    const [searchTerm, setSearchTerm] = React.useState('')
    const [layout, setLayout] = React.useState<'grid' | 'list'>('grid')

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
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <Select onValueChange={setSelectedGenre} value={selectedGenre}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Genre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="*">All Genres</SelectItem>
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
                        className="flex-grow"
                    />
                    <LayoutToggle layout={layout} setLayout={setLayout} />
                </div>
                <div className={`grid gap-6 ${layout === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} layout={layout} />
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}
