import React from 'react'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"

interface RentFormProps {
    onSubmit: (duration: number) => void
    onCancel: () => void
}

export default function RentForm({ onSubmit, onCancel }: RentFormProps) {
    const [duration, setDuration] = React.useState(7)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(duration)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="duration">Rent Duration (days)</Label>
                <Input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="1"
                />
            </div>
            <div className="flex space-x-4">
                <Button type="submit">Confirm Rent</Button>
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}
