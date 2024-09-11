import React, {HTMLProps, PropsWithChildren} from 'react'
import { Link } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import {cn} from "@/lib/utils";

export default function GuestLayout({ children, ...props }: PropsWithChildren<
    HTMLProps<HTMLDivElement> & {
        wrapperClassName?: string
    }
>) {
    return (
        <div className={cn(
            "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-background",
            props.className
        )}>
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-36 fill-current text-primary" />
                </Link>
            </div>

            <div className={cn(
                    "w-full sm:max-w-md mt-6 px-6 py-4 bg-card text-card-foreground border shadow-md overflow-hidden sm:rounded-lg",
                    props.wrapperClassName
                )}
            >
                {children}
            </div>
        </div>
    )
}
