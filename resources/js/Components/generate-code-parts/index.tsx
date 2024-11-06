import {z, ZodTypeAny} from 'zod'
import {FormFieldType} from '@/types'

type FormFieldOrGroup = FormFieldType | FormFieldType[]

export const generateZodSchema = (
    formFields: FormFieldOrGroup[],
): z.ZodObject<any> => {
    const schemaObject: Record<string, z.ZodTypeAny> = {}

    const processField = (field: FormFieldType): void => {
        if (field.variant === 'Label') return

        let fieldSchema: z.ZodTypeAny

        switch (field.variant) {
            case 'Checkbox':
                fieldSchema = z.boolean().default(true)
                break
            case 'Date Picker':
                fieldSchema = z.coerce.date()
                break
            case 'Datetime Picker':
                fieldSchema = z.coerce.date()
                break
            case 'Input':
                if (field.type === 'email') {
                    fieldSchema = z.string().email()
                    break
                } else if (field.type === 'number') {
                    fieldSchema = z.coerce.number()
                    break
                } else {
                    fieldSchema = z.string()
                    break
                }
            case 'Location Input':
                fieldSchema = z.tuple([
                    z.string({
                        required_error: 'Country is required',
                    }),
                    z.string().optional(), // State name, optional
                ])
                break
            case 'Slider':
                fieldSchema = z.coerce.number()
                break
            case 'Signature Input':
                fieldSchema = z.string({
                    required_error: 'Signature is required',
                })
                break
            case 'Smart Datetime Input':
                fieldSchema = z.coerce.date()
                break
            case 'Number':
                fieldSchema = z.coerce.number()
                break
            case 'Switch':
                fieldSchema = z.boolean()
                break
            case 'Tags Input':
                fieldSchema = z
                    .array(z.string())
                    .nonempty('Please enter at least one item')
                break
            case 'Multi Select':
                fieldSchema = z
                    .array(z.string())
                    .nonempty('Please select at least one item')
                break
            default:
                fieldSchema = z.string()
        }

        if (field.min !== undefined && 'min' in fieldSchema) {
            fieldSchema = (fieldSchema as any).min(
                field.min,
                `Must be at least ${field.min}`,
            )
        }
        if (field.max !== undefined && 'max' in fieldSchema) {
            fieldSchema = (fieldSchema as any).max(
                field.max,
                `Must be at most ${field.max}`,
            )
        }

        if (field.required !== true) {
            fieldSchema = fieldSchema.optional()
        }
        schemaObject[field.name] = fieldSchema as ZodTypeAny // Ensure fieldSchema is of type ZodTypeAny
    }

    formFields.flat().forEach(processField)

    return z.object(schemaObject)
}

export const zodSchemaToString = (schema: z.ZodTypeAny): string => {
    if (schema instanceof z.ZodDefault) {
        return `${zodSchemaToString(schema._def.innerType)}.default(${JSON.stringify(schema._def.defaultValue())})`
    }

    if (schema instanceof z.ZodBoolean) {
        return `z.boolean()`
    }

    if (schema instanceof z.ZodNumber) {
        let result = 'z.number()'
        if ('checks' in schema._def) {
            schema._def.checks.forEach((check: any) => {
                if (check.kind === 'min') {
                    result += `.min(${check.value})`
                } else if (check.kind === 'max') {
                    result += `.max(${check.value})`
                }
            })
        }
        return result
    }

    if (schema instanceof z.ZodString) {
        let result = 'z.string()'
        if ('checks' in schema._def) {
            schema._def.checks.forEach((check: any) => {
                if (check.kind === 'min') {
                    result += `.min(${check.value})`
                } else if (check.kind === 'max') {
                    result += `.max(${check.value})`
                }
            })
        }
        return result
    }

    if (schema instanceof z.ZodDate) {
        return `z.coerce.date()`
    }

    if (schema instanceof z.ZodArray) {
        return `z.array(${zodSchemaToString(schema.element)}).nonempty("Please at least one item")`
    }

    if (schema instanceof z.ZodTuple) {
        return `z.tuple([${schema.items.map((item: z.ZodTypeAny) => zodSchemaToString(item)).join(', ')}])`
    }

    if (schema instanceof z.ZodObject) {
        const shape = schema.shape
        const shapeStrs = Object.entries(shape).map(
            ([key, value]) => `${key}: ${zodSchemaToString(value as ZodTypeAny)}`,
        )
        return `z.object({
  ${shapeStrs.join(',\n  ')}
})`
    }

    if (schema instanceof z.ZodOptional) {
        return `${zodSchemaToString(schema.unwrap())}.optional()`
    }

    return 'z.unknown()'
}

export const getZodSchemaString = (formFields: FormFieldOrGroup[]): string => {
    const schema = generateZodSchema(formFields)
    const schemaEntries = Object.entries(schema.shape)
        .map(([key, value]) => {
            return `  ${key}: ${zodSchemaToString(value as ZodTypeAny)}`
        })
        .join(',\n')

    return `const formSchema = z.object({\n${schemaEntries}\n});`
}

// New function to generate defaultValues
export const generateDefaultValues = (
    fields: FormFieldOrGroup[],
    existingDefaultValues: Record<string, any> = {},
): Record<string, any> => {
    const defaultValues: Record<string, any> = {...existingDefaultValues}

    fields.flat().forEach((field) => {
        // Skip if field already has a default value
        if (defaultValues[field.name]) return

        // Handle field variants
        switch (field.variant) {
            case 'Multi Select':
                defaultValues[field.name] = ['React']
                break
            case 'Tags Input':
                defaultValues[field.name] = []
                break
            case 'Datetime Picker':
            case 'Smart Datetime Input':
            case 'Date Picker':
                defaultValues[field.name] = new Date()
                break
        }
    })

    return defaultValues
}

export const generateDefaultValuesString = (
    fields: FormFieldOrGroup[],
): string => {
    const defaultValues: Record<string, any> = {}
    const dateFields: string[] = []

    fields.flat().forEach((field) => {
        if (field.variant === 'Multi Select') {
            defaultValues[field.name] = ['React']
        } else if (field.variant === 'Tags Input') {
            defaultValues[field.name] = ['test']
        } else if (
            field.variant === 'Datetime Picker' ||
            field.variant === 'Smart Datetime Input' ||
            field.variant === 'Date Picker'
        ) {
            dateFields.push(field.name)
            delete defaultValues[field.name]
        }
    })

    if (Object.keys(defaultValues).length === 0 && dateFields.length === 0) {
        return ''
    }

    // Convert defaultValues to string, handling both regular values and date fields
    const regularValuesString =
        Object.keys(defaultValues).length > 0
            ? JSON.stringify(defaultValues).slice(1, -1) // Remove the outer {}
            : ''

    const dateFieldsString = dateFields
        .map((fieldName) => `"${fieldName}": new Date()`)
        .join(',')

    const combinedString = [regularValuesString, dateFieldsString]
        .filter(Boolean)
        .join(',')

    return `defaultValues: {${combinedString}},`
}
