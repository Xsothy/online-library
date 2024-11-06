import React, {useEffect, useMemo} from 'react'
import { Link, usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
import { useToast } from "@/hooks/use-toast"
import BookSearchCombobox from '@/Components/BookSearchCombobox'
import { Toaster } from "@/Components/ui/toaster"
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavbarAction from "@/Components/NavbarAction";
import NavList from "@/Components/NavList";
import AppFooter from "@/Components/AppFooter";

export default function thzAppLayout({ children }: { children: React.ReactNode }) {
    const { props, component } = usePage<PageProps>()
    const { auth, config, flash } = props

    const navList = useMemo(() => {
        return [
            {name: "Home", href: route('home'), active: component === "Home"},
            {name: "Book", href: route('book.index'), active: component.startsWith("Book")},
            {name: "Genre", href: route('genre'), active: component.startsWith("Genre")},
        ]
    }, [component])

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
                                    <ApplicationLogo className="h-16 w-32 fill-current" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-12 sm:flex sm:space-x-10">
                                <NavList list={navList} />
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                            <BookSearchCombobox />
                            <NavbarAction auth={auth} />
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
            </main>

            <AppFooter config={config} />
            <Toaster />
        </div>
    )
}
