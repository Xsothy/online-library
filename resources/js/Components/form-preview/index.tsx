import React from 'react'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {toast} from 'sonner'

import {renderFormField} from '@/Components/render-form-field'
import {Form, FormField, FormItem, FormControl} from '@/Components/ui/form'
import {Button} from '@/Components/ui/button'
import If from '@/Components/ui/if'
import {FormFieldType} from '@/types'

import {
    generateZodSchema,
    generateDefaultValues,
} from '@/Components/generate-code-parts'

export type FormFieldOrGroup = FormFieldType | FormFieldType[]

export type FormPreviewProps = {
    formFields: FormFieldOrGroup[]
}

const renderFormFields = (fields: FormFieldOrGroup[], form: any) => {
    return fields.map((fieldOrGroup, index) => {
        if (Array.isArray(fieldOrGroup)) {
            const colSpan = fieldOrGroup.length === 2 ? 6 : 4
            return (
                <div key={index} className="grid grid-cols-12 gap-4">
                    {fieldOrGroup.map((field, subIndex) => (
                        <FormField
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            render={({field: formField}) => (
                                <FormItem className={`col-span-${colSpan}`}>
                                    <FormControl>
                                        {React.cloneElement(
                                            renderFormField(field, form) as React.ReactElement,
                                            {
                                                ...formField,
                                            },
                                        )}
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
            )
        } else {
            return (
                <FormField
                    key={index}
                    control={form.control}
                    name={fieldOrGroup.name}
                    render={({field: formField}) => (
                        <FormItem>
                            <FormControl>
                                {React.cloneElement(
                                    renderFormField(fieldOrGroup, form) as React.ReactElement,
                                    {
                                        ...formField,
                                    },
                                )}
                            </FormControl>
                        </FormItem>
                    )}
                />
            )
        }
    })
}

export const FormBuilder: React.FC<FormPreviewProps> = ({formFields}) => {
    const formSchema = generateZodSchema(formFields)

    const defaultVals = generateDefaultValues(formFields)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultVals,
    })

    function onSubmit(data: any) {
        try {
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                  <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>,
            )
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <div className="w-full h-full col-span-1 rounded-xl flex justify-center">
            <If
                condition={formFields.length > 0}
                render={() => (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 py-5 max-w-lg mx-auto"
                        >
                            {renderFormFields(formFields, form)}
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                )}
                otherwise={() => (
                    <div className="h-[50vh] flex justify-center items-center">
                        <p>No form element selected yet.</p>
                    </div>
                )}
            />
        </div>
    )
}
