import React from 'react'
import { Button } from "@/Components/ui/button"

interface ReserveButtonProps {
    bookId: number
    onReserve: () => void
    isReserving: boolean
    setIsReserving: (isReserving: boolean) => void
}

export default function ReserveButton({ bookId, onReserve, isReserving, setIsReserving }: ReserveButtonProps) {
    const handleReserve = () => {
        setIsReserving(true)
        onReserve()
    }

    return (
        <Button onClick={handleReserve} disabled={isReserving}>
            {isReserving ? 'Reserving...' : 'Reserve'}
        </Button>
    )
}
