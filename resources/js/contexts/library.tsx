import React, {createContext, useContext, useState, useEffect} from 'react'
import UserData = App.Data.UserData;
import {Effect} from "effect";
import {UnAuthorizedError} from "@/errors";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

type User = UserData

type Book = {
    id: number
    title: string
    description: string
    publish_at: string
}

type BookInventory = {
    book_id: number
    inventory_id: number
    price: number
    rent_price: number
}

type Reservation = {
    id: number
    book_id: number
    created_at: string
    created_by: number
}

type Rent = {
    id: number
    book_id: number
    created_by: number
    due_date: string
    duration: number
    received_at: string | null
    delivered_at: string | null
}

type Invoice = {
    id: number
    rent_id: number
    created_at: string
}

type LibraryContextType = {
    user: User | null
    books: Book[]
    bookInventories: BookInventory[]
    reservations: Reservation[]
    rents: Rent[]
    invoices: Invoice[]
    loading: boolean
    error: string | null
    rentBook: (bookId: number, duration: number) => Promise<void>
    reserveBook: (bookId: number) => Promise<void>
    makePayment: (invoiceId: number) => Promise<void>
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined)

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const auth = usePage<PageProps>().props.auth
    if (!auth) throw new Error('Auth data not found')
    const [user, setUser] = useState<User>(auth.user)
    const [books, setBooks] = useState<Book[]>([])
    const [bookInventories, setBookInventories] = useState<BookInventory[]>([])
    const [reservations, setReservations] = useState<Reservation[]>([])
    const [rents, setRents] = useState<Rent[]>([])
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Simulate API call to fetch data
        console.log('useEffect')
        setTimeout(() => {
            setBooks([
                {
                    id: 1,
                    title: 'To Kill a Mockingbird',
                    description: 'A classic of modern American literature.',
                    publish_at: '1960-07-11'
                },
                {
                    id: 2,
                    title: '1984',
                    description: 'A dystopian social science fiction novel.',
                    publish_at: '1949-06-08'
                },
                {
                    id: 3,
                    title: 'Pride and Prejudice',
                    description: 'A romantic novel of manners.',
                    publish_at: '1813-01-28'
                },
            ])
            setBookInventories([
                {book_id: 1, inventory_id: 1, price: 15.99, rent_price: 2.99},
                {book_id: 2, inventory_id: 2, price: 12.99, rent_price: 2.49},
                {book_id: 3, inventory_id: 3, price: 9.99, rent_price: 1.99},
            ])
            setLoading(false)
        }, 1000)
    }, [])

    const rentBook = async (bookId: number, duration: number) => {
        setLoading(true)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            const newRent: Rent = {
                id: rents.length + 1,
                book_id: bookId,
                created_by: user!.id,
                due_date: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                duration: duration,
                received_at: null,
                delivered_at: new Date().toISOString(),
            }
            setRents([...rents, newRent])
            const newInvoice: Invoice = {
                id: invoices.length + 1,
                rent_id: newRent.id,
                created_at: new Date().toISOString(),
            }
            setInvoices([...invoices, newInvoice])
        } catch (err) {
            setError('Failed to rent book. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const reserveBook = async (bookId: number) => {
        setLoading(true)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            const newReservation: Reservation = {
                id: reservations.length + 1,
                book_id: bookId,
                created_at: new Date().toISOString(),
                created_by: user!.id,
            }
            setReservations([...reservations, newReservation])
        } catch (err) {
            setError('Failed to reserve book. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const makePayment = async (invoiceId: number) => {
        setLoading(true)
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            // In a real app, you'd update the payment status
            setError('Payment processed successfully!')
        } catch (err) {
            setError('Failed to process payment. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <LibraryContext.Provider value={{
            user,
            books,
            bookInventories,
            reservations,
            rents,
            invoices,
            loading,
            error,
            rentBook,
            reserveBook,
            makePayment
        }}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibrary = () => {
    const context = useContext(LibraryContext)
    if (context === undefined) {
        throw new Error('useLibrary must be used within a LibraryProvider')
    }
    return context
}
