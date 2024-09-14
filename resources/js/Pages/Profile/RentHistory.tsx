import ProfileLayout from '@/Layouts/ProfileLayout'
    import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { PageProps } from '@/types'

export default function RentHistory({ auth }: PageProps<{ auth: App.Data.AuthData }>) {
    const rentHistory = auth.user.rents

    return (
        <ProfileLayout title="Rent History" auth={auth}>
            <div className="space-y-6">
                {rentHistory.map((rent) => (
                    <Card key={rent.id}>
                        <CardHeader>
                            <CardTitle>{rent.book.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-start space-x-4">
                            <img src={rent.book.cover?.path || "/placeholder.svg?height=200&width=150"} alt={rent.book.title} className="w-24 h-32 object-cover" />
                            <div>
                                <p className="text-sm text-muted-foreground">By {rent.book.author}</p>
                                <p className="text-sm mt-2">Rented: {rent.createdAt}</p>
                                <p className="text-sm">Due: {rent.dueAt}</p>
                                <p className="text-sm">Duration: {rent.duration} days</p>
                                {rent.deliveredAt && <p className="text-sm">Delivered: {rent.deliveredAt}</p>}
                                {rent.receivedAt && <p className="text-sm">Received: {rent.receivedAt}</p>}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ProfileLayout>
    )
}
