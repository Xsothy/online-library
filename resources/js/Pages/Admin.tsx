import React from "react";
import App from "@/refineApp";
import { Head } from "@inertiajs/react";
import { useNavigation } from "@refinedev/core";

export default function Admin({
    resource,
    action,
    id,
}: {
    resource?: string;
    action?: string;
    id?: string;
}) {
    const { list, create, edit, show } = useNavigation();

    const navigateTo = () => {
        if (!resource) {
            resource = "blog_posts";
        }

        switch (action) {
            case "create":
                create(resource);
                break;
            case "edit":
                edit(resource, id ?? "");
                break;
            case "show":
                show(resource, id ?? "");
                break;
            default:
                list(resource);
        }
    };

    // navigateTo()

    return (
        <React.StrictMode>
            <Head title={"Refine App"} />
            <App resource={resource} action={action} id={id} />
        </React.StrictMode>
    );
}
