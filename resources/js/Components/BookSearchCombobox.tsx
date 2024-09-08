import React, { useState } from 'react'
import { router } from '@inertiajs/react'
import { Button } from "@/Components/ui/button"
import { Search } from 'lucide-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import axios from 'axios'

export default function BookSearchCombobox() {
    const [open, setOpen] = useState(false)
    const [searchResults, setSearchResults] = useState<App.Data.BookData[]>([])

    const handleSearch = async (query: string) => {
        if (query.length > 2) {
            try {
                const response = await axios.get(route('api.book.index'), { params: { search: query } })
                setSearchResults(response.data)
            } catch (error) {
                console.error('Error fetching search results:', error)
            }
        } else {
            setSearchResults([])
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-[200px] justify-between">
                    <Search className="h-4 w-4" />
                    <span className="mr-2">Search books...</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search books..." onValueChange={handleSearch} />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Books">
                            {searchResults.map((book) => (
                                <CommandItem
                                    key={book.id}
                                    onSelect={() => {
                                        setOpen(false)
                                        router.visit(route('book.show', { bookId: book.id }))
                                    }}
                                >
                                    {book.title}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
