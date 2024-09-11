import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {Button} from "@/Components/ui/button";
import {Bell, Library, LogOut, Settings, User} from "lucide-react";
import {Link} from "@inertiajs/react";
import React from "react";
export default function NavbarAction({auth}: {auth: App.Data.AuthData | null}) {
    if (!auth) return (
        <div className="flex items-center space-x-4">
            <Link
                href={route('login')}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
            >
                Login
            </Link>
            <Link
                href={route('register')}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
            >
                Register
            </Link>
        </div>
    );
    return (
        <div className="flex items-center space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full ml-4">
                        <Bell className="h-4 w-4"/>
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
                        <User className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                        <Link href={route('profile.edit')}>
                            <Settings className="mr-2 h-4 w-4"/>
                            Settings
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/library">
                            <Library className="mr-2 h-4 w-4"/>
                            My Library
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem asChild>
                        <Link href={route('logout')} method="post" as="button" className="w-full text-left">
                            <LogOut className="mr-2 h-4 w-4"/>
                            <span>Log out</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
