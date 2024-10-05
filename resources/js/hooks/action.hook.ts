// Define a utility type that resolves the correct type based on the namespace
import {useForm} from "@inertiajs/react";
import {ActionTypeMap} from "@/types/generated";

type ActionParams<Namespace extends keyof ActionTypeMap> = ActionTypeMap[Namespace];

// Define the action function using the mapped types
export function useAction<Namespace extends keyof ActionTypeMap>(
    namespace: Namespace,
    params: ActionParams<Namespace>
) {
    // Convert namespace to Ziggy route format (e.g., 'product.create' -> 'action.product.create')
    const routeName = `action.${namespace}`;

    // Example of form handling
    const {
        data,
        setData,
        post,
        processing,
        errors
    } = useForm<ActionParams<Namespace>>(params);

    const submit = () => post(route(routeName));

    return {
        data,
        setData,
        submit,
        processing,
        errors
    };
}
