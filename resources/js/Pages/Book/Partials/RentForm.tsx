import React, { useState } from 'react'

interface RentFormProps {
    onSubmit: (duration: number) => void
    onCancel: () => void
}

export default function RentForm({ onSubmit, onCancel }: RentFormProps) {
    const [duration, setDuration] = useState(7)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(duration)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    Rent Duration (days)
                </label>
                <input
                    type="number"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="1"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div className="flex space-x-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Confirm Rent
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
