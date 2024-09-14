import {FormEventHandler} from 'react';
import {Link, useForm} from '@inertiajs/react';
import {Button} from "@/Components/ui/button"
import {Input} from "@/Components/ui/input"
import {Label} from "@/Components/ui/label"
import {useToast} from "@/hooks/use-toast"

export default function UpdateProfileInformation({
                                                     auth,
                                                     mustVerifyEmail,
                                                     status,
                                                     className = ''
                                                 }: {
    auth: App.Data.AuthData | null,
    mustVerifyEmail: boolean,
    status?: string,
    className?: string
}) {
    const user = auth?.user;
    const {toast} = useToast()

    const {data, setData, patch, errors, processing} = useForm(user);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            onSuccess: () => {
                toast({
                    title: "Profile updated",
                    description: "Your profile information has been successfully updated.",
                })
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium">Profile Information</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input
                        id="first_name"
                        value={data.firstName ?? ''}
                        onChange={(e) => setData('firstName', e.target.value)}
                        required
                        autoComplete="given-name"
                    />
                    {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="last_name">Last Name</Label>
                    <Input
                        id="last_name"
                        value={data.lastName ?? ''}
                        onChange={(e) => setData('lastName', e.target.value)}
                        required
                        autoComplete="family-name"
                    />
                    {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Username</Label>
                    <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete="name"
                    />
                    {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />
                    {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                </div>

                {mustVerifyEmail && user?.emailVerifiedAt === null && (
                    <div>
                        <p className="text-sm mt-2 text-muted-foreground">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-primary hover:text-primary/90 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button type="submit" disabled={processing}>Save</Button>
                </div>
            </form>
        </section>
    );
}
