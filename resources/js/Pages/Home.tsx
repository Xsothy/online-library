import React from 'react'
import { Link } from '@inertiajs/react'
import { PageProps } from '@/types'
import AppLayout from '@/Layouts/AppLayout'
import { Card, CardContent } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/Components/ui/carousel"

interface HomeProps extends PageProps {
    recommendations: App.Data.BookData[]
    popularAuthors: any[]
    popularBooks: App.Data.BookData[]
    genres: App.Data.GenreData[]
}

export default function Home({ recommendations,
                                 popularAuthors, popularBooks, genres }: HomeProps) {
    const [recommendationApi, setRecommendationApi] = React.useState<CarouselApi>()
    const [popularAuthorsApi, setPopularAuthorsApi] = React.useState<CarouselApi>()
    const [popularBooksApi, setPopularBooksApi] = React.useState<CarouselApi>()

    return (
        <AppLayout>
            <div className="space-y-12 py-8">
                <section className="text-center py-12">
                    <h1 className="text-4xl font-bold mb-4">Discover a world of books at your fingertips</h1>
                    <p className="text-xl text-gray-400">Explore, borrow, and enjoy your next great read with ShelfSavvy</p>
                </section>

                <Carousel setApi={setRecommendationApi}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Recommendations</h2>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="icon" className="rounded-full" onClick={() => recommendationApi?.scrollPrev()}>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full" onClick={() => recommendationApi?.scrollNext()}>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <CarouselContent>
                        {recommendations.map((book) => (
                            <CarouselItem key={book.id} className="flex-[0_0_33.333%] min-w-0 px-2">
                                <Link href={route('book.show', book.id)}>
                                    <Card className="bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors">
                                        <CardContent className="p-4">
                                            <img src={book.cover?.path || '/placeholder.png'} alt={book.title} className="w-full aspect-[1/1.6] object-cover mb-4 rounded" />
                                            <h3 className="text-lg font-semibold truncate">{book.title}</h3>
                                            <p className="text-sm text-gray-400 truncate">{book.author}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {popularAuthors.length > 0 && (
                    <Carousel setApi={setPopularAuthorsApi}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-semibold">Popular Authors</h2>
                            <div className="flex space-x-2">
                                <CarouselPrevious onClick={() => popularAuthorsApi?.scrollPrev()} />
                                <CarouselNext onClick={() => popularAuthorsApi?.scrollNext()} />
                            </div>
                        </div>
                        <CarouselContent>
                            {popularAuthors.map((author) => (
                                <CarouselItem key={author.id}>
                                    <div className="flex-[0_0_33.333%] min-w-0 px-2">
                                        <Link href={`/authors/${author.id}`}>
                                            <Card className="bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors">
                                                <CardContent className="flex flex-col items-center p-4">
                                                    <img src={author.imageUrl} alt={author.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                                                    <h3 className="text-lg font-semibold text-center truncate">{author.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                )}

                <Carousel setApi={setPopularBooksApi}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold">Popular Books</h2>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="icon" className="rounded-full" onClick={() => popularBooksApi?.scrollPrev()}>
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full" onClick={() => popularBooksApi?.scrollNext()}>
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <CarouselContent>
                        {popularBooks.map((book) => (
                            <CarouselItem key={book.id} className="flex-[0_0_33.333%] min-w-0 px-2">
                                <Link href={route('book.show', book.id)}>
                                    <Card className="bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors">
                                        <CardContent className="p-4">
                                            <img src={book.cover?.path || '/placeholder.png'} alt={book.title} className="w-full aspect-[1/1.6] object-cover mb-4 rounded" />
                                            <h3 className="text-lg font-semibold truncate">{book.title}</h3>
                                            <p className="text-sm text-gray-400 truncate">{book.author}</p>
                                            <Badge variant={book.isAvailable ? "default" : "destructive"} className="mt-2">
                                                {book.isAvailable ? "Available" : "Unavailable"}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Genres</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {genres.map((genre) => (
                            <Link key={genre.id} href={`/books?genre=${genre.id}`}>
                                <Card className="bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors">
                                    <CardContent className="p-4 text-center">
                                        <h3 className="text-lg font-semibold">{genre.name}</h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}
