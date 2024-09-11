import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Checkbox } from "@/Components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { toast } = useToast()
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    useEffect(() => {
        if (status) {
            toast({
                title: "Success",
                description: status,
            })
        }
    }, [status])

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        post(route('login'))
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            <form onSubmit={submit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="remember"
                        name="remember"
                        checked={data.remember}
                        onCheckedChange={(checked) => setData('remember', checked as boolean)}
                    />
                    <Label htmlFor="remember">Remember me</Label>
                </div>

                <div className="flex items-center justify-end space-x-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button type="submit" disabled={processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </GuestLayout>
    )
}
