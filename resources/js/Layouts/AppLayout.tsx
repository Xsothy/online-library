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
import { User, LogOut, Bell } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import BookSearchCombobox from '@/Components/BookSearchCombobox'
import { Toaster } from "@/Components/ui/toaster"

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { url, props, component } = usePage<PageProps>()
    const { auth, config, flash } = props
    const { toast } = useToast()

    useEffect(() => {
        if (flash) {
            toast({
                title: flash.status || 'Notification',
                description: flash.message,
                variant: flash.status as 'default' | 'destructive' | undefined,
            })
        }
    }, [flash])

    return (
        <div className="min-h-screen bg-background text-foreground">
            <nav className="sticky top-0 z-50 border-b border-border bg-background">
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
                                    className={cn(
                                        component === "Home" ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent",
                                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    )}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/book"
                                    className={cn(
                                        component.startsWith("Book") ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent",
                                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    )}
                                >
                                    Book
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <BookSearchCombobox />
                            {auth ? (
                                <>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full ml-4">
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
                                            <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full ml-2">
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

            <footer className="bg-[#1E1E1E] mt-12 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About {config.app.name}</h3>
                            <p className="text-sm text-gray-400">{config.app.name} is your digital library, bringing the world of books to your fingertips.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
                                <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
                                <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                        <p className="text-sm text-gray-400">&copy; 2023 {config.app.name}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <Toaster />
        </div>
    )
}
