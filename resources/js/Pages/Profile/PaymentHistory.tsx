import ProfileLayout from '@/Layouts/ProfileLayout'
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { PageProps } from '@/types'

export default function PaymentHistory({ auth }: PageProps<{ auth: App.Data.AuthData }>) {
    const paymentHistory = auth.user.payments

    return (
        <ProfileLayout title="Payment History" auth={auth}>
            <div className="space-y-6">
                {paymentHistory.map((payment) => (
                    <Card key={payment.id}>
                        <CardHeader>
                            <CardTitle>{payment.invoice.book.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">${payment.invoice.book.inventories[0]?.price.toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">Due: {payment.dueAt}</p>
                            <p className="text-sm text-muted-foreground">Created: {payment.createdAt}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ProfileLayout>
    )
}
