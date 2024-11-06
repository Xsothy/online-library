import {App} from "@/types/generated";

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
    id: number;
    [key: string]: any;
};

export type FormFieldType = {
    type: string
    variant: string
    name: string
    label: string
    placeholder?: string
    description?: string
    disabled: boolean
    value: string | boolean | Date | number | string[]
    setValue: (value: string | boolean) => void
    checked: boolean
    onChange: (
        value: string | string[] | boolean | Date | number | number[],
    ) => void
    onSelect: (
        value: string | string[] | boolean | Date | number | number[],
    ) => void
    rowIndex: number
    required?: boolean
    min?: number
    max?: number
    step?: number
}

export type FieldType = { name: string; isNew: boolean; index?: number }
