import {Link} from "@inertiajs/react";
import {cn} from "@/lib/utils";
import React from "react";

interface NavListProps {
    list: Array<{
        name: string, href: string, active?: boolean
    }>
}
export default function NavList({ list } : NavListProps) {

    return (
        <>
            {list.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className={cn(
                        item.active ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent",
                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    )}
                >
                    {item.name}
                </Link>
            ))}
        </>
    )
}
