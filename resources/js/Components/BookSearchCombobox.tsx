import React, {useEffect, useState} from 'react'
import {router} from '@inertiajs/react'
import {Button} from "@/Components/ui/button"
import {Search} from 'lucide-react'
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/Components/ui/command"
import {Popover, PopoverContent, PopoverTrigger,} from "@/Components/ui/popover"
import axios from 'axios'
import {Badge} from "@/Components/ui/badge";

export default function BookSearchCombobox() {
    const [open, setOpen] = useState(false)
    const [searchResults, setSearchResults] = useState<App.Data.BookData[]>([])
    const handleSearch = async (query: string) => {
        try {
            const response = await axios.get(route('api.book.index'), {params: {search: query}})
            setSearchResults(Object.values(response.data))
        } catch (error) {
            console.error('Error fetching search results:', error)
        }
    }

    useEffect(() => {
        if (open) {
            handleSearch('').then()
        }
    }, [open])
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-[400px] justify-start gap-4">
                    <Search className="h-4 w-4"/>
                    <span>Search books...</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0">
                <Command>
                    <CommandInput placeholder="Search books..." onValueChange={handleSearch}/>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {searchResults.map((book) => (
                                <CommandItem
                                    key={book.id}
                                    onSelect={() => {
                                        setOpen(false)
                                        router.visit(route('book.show', {id: book.id}))
                                    }}
                                    className="cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        {book.isAvailable && (
                                            <Badge variant="default">Available</Badge>
                                        )}
                                        {!book.isAvailable && (
                                            <Badge variant="destructive">Unavailable</Badge>
                                        )}
                                        <span>{book.title}</span>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
