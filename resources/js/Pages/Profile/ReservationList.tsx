import ProfileLayout from '@/Layouts/ProfileLayout'
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { PageProps } from '@/types'

export default function ReservationList({ auth }: PageProps<{ auth: App.Data.AuthData }>) {
    const reservations = auth?.user?.reservations || []

    return (
        <ProfileLayout title="My Reservations" auth={auth}>
            <div className="space-y-6">
                {reservations.map((reservation) => (
                    <Card key={reservation.id}>
                        <CardHeader>
                            <CardTitle>{reservation.book.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-start space-x-4">
                            <img src={reservation.book.cover?.path || "/placeholder.svg?height=200&width=150"} alt={reservation.book.title} className="w-24 h-32 object-cover" />
                            <div>
                                <p className="text-sm text-muted-foreground">By {reservation.book.author}</p>
                                <p className="text-sm mt-2">Reserved on: {reservation.createdAt}</p>
                                <p className="text-sm">Duration: {reservation.duration} days</p>
                                <Button className="mt-4" variant="outline" size="sm">
                                    Cancel Reservation
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {reservations.length === 0 && (
                    <p className="text-muted-foreground">You have no active reservations.</p>
                )}
            </div>
        </ProfileLayout>
    )
}
