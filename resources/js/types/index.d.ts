export interface User extends App.Data.UserData {}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & App.Data.ShareData;

export type Resource = {
    data: ResourceData[];
    model: string;
    label: string;
    pluralLabel: string;
    uriKey: string;
    fields: Array<{
        name: string;
        label: string;
        default: any;
        type: string;
        sortable: boolean;
        searchable: boolean;
        rules: Array<string>;
    }>;
};

export type ResourceData = {
    [key: string]: any;
}
