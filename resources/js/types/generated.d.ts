declare namespace App.Data {
    export type AuthData = {
        user: App.Data.UserData;
    };
    export type BookData = {
        isAvailable: boolean;
        id: number;
        title: string;
        description: string;
        publish_at: string;
        inventories: Array<App.Data.InventoryData>;
        genres: Array<App.Data.GenreData>;
    };
    export type ConfigData = {
        app: App.Data.Config.AppConfigData;
    };
    export type GenreData = {
        id: number;
        name: string;
        description: string;
    };
    export type InventoryData = {
        id: number;
        quantity: number;
        price: number;
        rent_price: number;
        created_by: App.Data.UserData;
        updated_by: App.Data.UserData;
        created_at: string;
        updated_at: string;
    };
    export type ShareData = {
        auth: App.Data.AuthData | null;
        config: App.Data.ConfigData;
    };
    export type UserData = {
        id: number;
        name: string;
        email: string;
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
}
