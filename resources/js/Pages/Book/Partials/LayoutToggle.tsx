import React from 'react'
import { LayoutGrid, LayoutList } from 'lucide-react'
import { Button } from "@/Components/ui/button"

interface LayoutToggleProps {
    layout: 'grid' | 'list'
    setLayout: (layout: 'grid' | 'list') => void
}

export default function LayoutToggle({ layout, setLayout }: LayoutToggleProps) {
    const toggleLayout = () => {
        setLayout(layout === 'grid' ? 'list' : 'grid')
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleLayout}>
            {layout === 'grid' ? <LayoutList className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
        </Button>
    )
}
