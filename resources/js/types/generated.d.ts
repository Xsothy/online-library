declare namespace App.Data {
    export type AttachmentData = {
        id: number;
        name: string;
        path: string;
        createdBy: App.Data.UserData;
        createdAt: string;
    };
    export type AuthData = {
        user: App.Data.UserData;
    };
    export type BookData = {
        isAvailable: boolean;
        id: number;
        title: string;
        description: string;
        author: string;
        publishedAt: string | null;
        inventories: Array<App.Data.InventoryData>;
        genres: Array<App.Data.GenreData>;
        comments: Array<App.Data.CommentData>;
        reviews: Array<App.Data.ReviewData>;
        cover: App.Data.AttachmentData | null;
    };
    export type CommentData = {
        id: number;
        body: string;
        createdBy: App.Data.UserData;
        createdAt: string;
        replies: Array<App.Data.CommentData>;
        updatedAt: string | null;
    };
    export type ConfigData = {
        app: App.Data.Config.AppConfigData;
    };
    export type FlashData = {
        message: string;
        status: App.Enum.NotificationStatusEnum | null;
    };
    export type GenreData = {
        id: number;
        name: string;
        description: string | null;
    };
    export type InventoryData = {
        id: number;
        quantity: number;
        price: number;
        rentPrice: number;
        createdBy: App.Data.UserData | null;
        updatedBy: App.Data.UserData | null;
        createdAt: string | null;
        updatedAt: string | null;
    };
    export type InvoiceData = {
        id: number;
        book: App.Data.BookData;
        createdBy: App.Data.UserData;
        createdAt: string;
    };
    export type NotificationData = {
        id: number;
        status: App.Enum.NotificationStatusEnum;
        message: string;
        user: App.Data.UserData;
        link: string | null;
        createdBy: App.Data.UserData | null;
        createdAt: string | null;
    };
    export type PaymentData = {
        dueAt: string;
        id: number;
        invoice: App.Data.InvoiceData;
        createdAt: string;
    };
    export type RentData = {
        dueAt: string;
        id: number;
        book: App.Data.BookData;
        duration: number;
        createdBy: App.Data.UserData;
        createdAt: string;
        updatedBy: App.Data.UserData | null;
        deliveredAt: string | null;
        receivedAt: string | null;
    };
    export type ReservationData = {
        id: number;
        book: App.Data.BookData;
        duration: number;
        createdBy: App.Data.UserData;
        createdAt: string;
    };
    export type ReviewData = {
        id: number;
        rating: number;
        createdBy: App.Data.UserData;
        createdAt: string;
        updatedAt: string | null;
    };
    export type ShareData = {
        auth: App.Data.AuthData | null;
        config: App.Data.ConfigData;
        flash: App.Data.FlashData | null;
    };
    export type UserData = {
        id: number;
        name: string;
        email: string;
        attachments: Array<App.Data.AttachmentData>;
        reservations: Array<App.Data.ReservationData>;
        rents: Array<App.Data.RentData>;
        wishList: Array<App.Data.BookData>;
        phoneNumber: string | null;
        firstName: string | null;
        lastName: string | null;
        kycStatus: App.Enum.KycStatusEnum | null;
        emailVerifiedAt: string | null;
    };
}
declare namespace App.Data.Config {
    export type AppConfigData = {
        name: string;
        env: string;
        debug: string;
        url: string;
    };
}
declare namespace App.Enum {
    export type KycStatusEnum = "pending" | "rejected" | "approved";
    export type NotificationStatusEnum =
        | "success"
        | "warning"
        | "danger"
        | "info";
}
