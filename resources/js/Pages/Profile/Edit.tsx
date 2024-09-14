import ProfileLayout from '@/Layouts/ProfileLayout'
import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import { PageProps } from '@/types'

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{
    mustVerifyEmail: boolean,
    status?: string,
    auth: App.Data.AuthData,
}>) {
    return (
        <ProfileLayout title="Account Settings" auth={auth}>
            <div className="max-w-xl space-y-6">
                <UpdateProfileInformationForm
                    auth={auth}
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />

                <UpdatePasswordForm />
            </div>
        </ProfileLayout>
    )
}
