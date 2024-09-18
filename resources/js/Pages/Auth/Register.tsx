import { useEffect, useState } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Card, CardContent } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Dropzone } from "@/Components/ui/dropzone"
import { Stepper, Step } from "@/Components/ui/stepper"
import { Settings, FolderPlus, FileText, MessageSquarePlus } from 'lucide-react'

export default function Register() {
    type FormDataType = Omit<
        App.Data.UserData,
        | 'id'
        | 'attachments'
        | 'kycStatus'
        | 'emailVerifiedAt'
        | 'reservations'
        | 'rents'
        | 'wishList'
    > & {
        password: string
        password_confirmation: string
        idCardFront: File | null
        idCardBack: File | null
        studentCardFront: File | null
        studentCardBack: File | null
    }

    const { data, setData, post, processing, errors, reset } = useForm<FormDataType>({
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        password_confirmation: '',
        idCardFront: null,
        idCardBack: null,
        studentCardFront: null,
        studentCardBack: null,
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const handleSubmit = () => {
        post(route('register'), {
            forceFormData: true
        })
    }

    const handleFileChange = (file: File | null, field: keyof FormDataType) => {
        setData(field, file)
    }

    return (
        <GuestLayout wrapperClassName={"sm:max-w-2xl"}>
            <Head title="Register" />
            <Stepper onComplete={handleSubmit} orientation={'vertical'} errors={errors}>
                <Step
                    name={1}
                    title="Personal Information"
                    icon={<Settings className="w-4 h-4" />}
                    fields={['firstName', 'lastName', 'name', 'email', 'phoneNumber']}
                >
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={data.firstName ?? ''}
                                    onChange={(e) => setData('firstName', e.target.value)}
                                    required
                                />
                                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    value={data.lastName ?? ''}
                                    onChange={(e) => setData('lastName', e.target.value)}
                                    required
                                />
                                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={data.name ?? ''}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            <Input
                                id="phoneNumber"
                                type="tel"
                                name="phoneNumber"
                                value={data.phoneNumber ?? ''}
                                onChange={(e) => setData('phoneNumber', e.target.value)}
                                required
                            />
                            {errors.phoneNumber && <p className="text-sm text-destructive">{errors.phoneNumber}</p>}
                        </div>
                    </div>
                </Step>
                <Step
                    name={2}
                    title="Security"
                    caption="Set your password"
                    icon={<FolderPlus className="w-4 h-4" />}
                    fields={['password', 'password_confirmation']}
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            {errors.password_confirmation && <p className="text-sm text-destructive">{errors.password_confirmation}</p>}
                        </div>
                    </div>
                </Step>
                <Step name={3} title="Terms of Service" icon={<FileText className="w-4 h-4" />} disabled>
                    This step is disabled and won't show up.
                </Step>
                <Step
                    name={4}
                    title="ID Verification"
                    icon={<MessageSquarePlus className="w-4 h-4" />}
                    fields={['idCardFront', 'idCardBack', 'studentCardFront', 'studentCardBack']}
                >
                    <Card>
                        <CardContent className="space-y-4">
                            <Tabs defaultValue="idCard">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="idCard">ID Card</TabsTrigger>
                                    <TabsTrigger value="studentCard">Student Card</TabsTrigger>
                                </TabsList>
                                <TabsContent value="idCard">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="idCardFront">ID Card Front</Label>
                                            <Dropzone
                                                onFileChange={(file) => handleFileChange(file, 'idCardFront')}
                                                value={data.idCardFront}
                                                accept={{ 'image/*': [] }}
                                            />
                                            {errors.idCardFront && <p className="text-sm text-destructive">{errors.idCardFront}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="idCardBack">ID Card Back</Label>
                                            <Dropzone
                                                onFileChange={(file) => handleFileChange(file, 'idCardBack')}
                                                value={data.idCardBack}
                                                accept={{ 'image/*': [] }}
                                            />
                                            {errors.idCardBack && <p className="text-sm text-destructive">{errors.idCardBack}</p>}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="studentCard">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="studentCardFront">Student Card Front</Label>
                                            <Dropzone
                                                onFileChange={(file) => handleFileChange(file, 'studentCardFront')}
                                                value={data.studentCardFront}
                                                accept={{ 'image/*': [] }}
                                            />
                                            {errors.studentCardFront && <p className="text-sm text-destructive">{errors.studentCardFront}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="studentCardBack">Student Card Back</Label>
                                            <Dropzone
                                                onFileChange={(file) => handleFileChange(file, 'studentCardBack')}
                                                value={data.studentCardBack}
                                                accept={{ 'image/*': [] }}
                                            />
                                            {errors.studentCardBack && <p className="text-sm text-destructive">{errors.studentCardBack}</p>}
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </Step>
            </Stepper>
            <div className="mt-4 text-center">
                <Link
                    href={route('login')}
                    className="text-sm text-muted-foreground hover:text-primary"
                >
                    Already registered?
                </Link>
            </div>
        </GuestLayout>
    )
}
