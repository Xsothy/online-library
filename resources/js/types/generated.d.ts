declare namespace App.Data {
    export type AuthData = {
        user: App.Data.UserData | null;
    };
    export type ConfigData = {
        app: App.Data.Config.AppConfigData;
    };
    export type ShareData = {
        auth: App.Data.AuthData;
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
