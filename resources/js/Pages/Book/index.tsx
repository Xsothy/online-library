import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import BookCard from '@/Pages/Book/Partials/BookCard'
import LayoutToggle from '@/Pages/Book/Partials/LayoutToggle'
import { Input } from "@/Components/ui/input"
import { Checkbox } from "@/Components/ui/checkbox"
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"

interface BookIndexProps extends PageProps {
    books: App.Data.BookData[]
    genres: App.Data.GenreData[]
}

export default function BookIndex({ books, genres }: BookIndexProps) {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [layout, setLayout] = useState<'grid' | 'list'>('grid')
    const [availability, setAvailability] = useState<'all' | 'available' | 'unavailable'>('all')
    const [sortBy, setSortBy] = useState<'name' | 'rating'>('name')

    const handleGenreChange = (genreId: string) => {
        setSelectedGenres(prev =>
            prev.includes(genreId)
                ? prev.filter(id => id !== genreId)
                : [...prev, genreId]
        )
    }

    const handleApplyFilters = () => {
        router.get(route('book.index'), {
            genres: selectedGenres,
            search: searchTerm,
            availability,
            sort: sortBy,
        }, {
            preserveState: true,
            preserveScroll: true,
        })
    }

    return (
        <AppLayout>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Filters</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Genres</h3>
                                {genres.map((genre) => (
                                    <div key={genre.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`genre-${genre.id}`}
                                            checked={selectedGenres.includes(genre.id.toString())}
                                            onCheckedChange={() => handleGenreChange(genre.id.toString())}
                                        />
                                        <Label htmlFor={`genre-${genre.id}`}>{genre.name}</Label>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Availability</h3>
                                <Select value={availability} onValueChange={(value: 'all' | 'available' | 'unavailable') => setAvailability(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select availability" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="available">Available</SelectItem>
                                        <SelectItem value="unavailable">Unavailable</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold">Sort By</h3>
                                <Select value={sortBy} onValueChange={(value: 'name' | 'rating') => setSortBy(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select sort option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="name">Name</SelectItem>
                                        <SelectItem value="rating">Rating</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleApplyFilters} className="w-full">Apply Filters</Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:w-3/4 space-y-6">
                    <div className="flex justify-between items-center">
                        <Input
                            type="text"
                            placeholder="Search books..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-sm"
                        />
                        <LayoutToggle layout={layout} setLayout={setLayout} />
                    </div>
                    <div className={`grid gap-6 ${layout === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {books.map((book) => (
                            <BookCard key={book.id} book={book} layout={layout} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
