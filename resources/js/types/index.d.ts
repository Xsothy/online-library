export interface User extends App.Data.UserData {
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & App.Data.ShareData;

export type Resource = {
    data: ResourceData[];
    model: string;
    label: string;
    pluralLabel: string;
    uriKey: string;
    fields: FormFieldType[];
};

export type ResourceData = {
    id: number;
    [key: string]: any;
};

export type BaseFieldType = {
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
    sortable: boolean
    searchable: boolean
}

export type FormFieldType = ({
    variant: 'Label' |'Checkbox' | 'Combobox' | 'Date Picker' | 'Datetime Picker' | 'Input OTP' | 'Location Input' | 'Multi Select' | 'Number' | 'Select' | 'Slider' | 'Signature Input' | 'Smart Datetime Input' | 'Switch' | 'Tags Input' | 'Textarea' | 'File Input' | 'Password' | 'Phone';
} & BaseFieldType) | ({
    type: string
    variant: 'Input'
} & BaseFieldType)
