import ProfileLayout from '@/Layouts/ProfileLayout'
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { PageProps } from '@/types'

export default function Wishlist({ auth }: PageProps<{ auth: App.Data.AuthData }>) {
    const wishlistItems: App.Data.BookData[] = auth.user.wishList

    return (
        <ProfileLayout title="My Wishlist" auth={auth}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                    <Card key={item.id}>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={item.cover?.path || "/placeholder.svg?height=200&width=150"} alt={item.title} className="w-full h-48 object-cover mb-4" />
                            <p className="text-sm text-muted-foreground">By {item.author}</p>
                            <p className="text-sm font-medium mt-2">{item.isAvailable ? "Available" : "Unavailable"}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm" disabled={!item.isAvailable}>
                                {item.isAvailable ? "Reserve" : "Notify Me"}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </ProfileLayout>
    )
}
