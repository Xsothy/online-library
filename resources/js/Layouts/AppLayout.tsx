import React, { useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
import { Button } from "@/Components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Toaster } from "@/Components/ui/toast"
import { User, LogOut, Bell } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { auth, config, flash } = usePage<PageProps>().props
    const { toast } = useToast()

    useEffect(() => {
        if (flash) {
            console.log(flash)
            toast({
                title: flash.status || 'Notification',
                description: flash.message || '',
            })
        }
    }, [flash])

    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <nav className="border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <span className="text-xl font-bold">{config.app.name}</span>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link
                                    href="/"
                                    className="border-primary text-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/book"
                                    className="border-transparent text-muted-foreground hover:text-foreground inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Books
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            {auth ? (
                                <>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                                <Bell className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            {/* We'll implement notifications here */}
                                            <DropdownMenuItem>No new notifications</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="relative h-8 w-8 rounded-full ml-2">
                                                <User className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem asChild>
                                                <Link href="/profile">Profile</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link href="/logout" method="post" as="button" className="w-full text-left">
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    <span>Log out</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
            </main>

            <footer className="border-t border-border">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © 2023 {config.app.name}. All rights reserved.
                    </p>
                </div>
            </footer>
            <Toaster />
        </div>
    )
}
