import React from 'react'
import AppLayout from "@/Layouts/AppLayout"
import { Head } from '@inertiajs/react'
import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Link } from '@inertiajs/react'

interface ProfileLayoutProps {
    children: React.ReactNode
    title: string
    auth: App.Data.AuthData
}

export default function ProfileLayout({ children, title, auth }: ProfileLayoutProps) {
    const tabs = [
        { name: 'Account Settings', href: route('profile.edit') },
        { name: 'Wishlist', href: route('profile.wishlist') },
        { name: 'Reservation List', href: route('profile.reservations') },
        { name: 'Rent History', href: route('profile.rent-history') },
    ]

    return (
        <AppLayout>
            <Head title={title} />
            <div className="container py-10">
                <div className="flex flex-col md:flex-row gap-6">
                    <aside className="w-full md:w-1/4">
                        <nav className="space-y-1">
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.name}
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start",
                                        route().current(tab.href)
                                            ? "bg-muted hover:bg-muted"
                                            : "hover:bg-transparent hover:underline"
                                    )}
                                    asChild
                                >
                                    <Link href={tab.href}>{tab.name}</Link>
                                </Button>
                            ))}
                        </nav>
                    </aside>
                    <main className="w-full md:w-3/4">
                        <div className="bg-card text-card-foreground rounded-lg shadow">
                            <div className="p-6">
                                <h1 className="text-2xl font-semibold mb-6">{title}</h1>
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AppLayout>
    )
}
