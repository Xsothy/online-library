import React from 'react'

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
        <button
            onClick={handleReserve}
            disabled={isReserving}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors disabled:opacity-50"
        >
            {isReserving ? 'Reserving...' : 'Reserve'}
        </button>
    )
}
