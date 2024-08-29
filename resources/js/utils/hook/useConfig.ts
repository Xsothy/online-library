import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";


export const useConfig = () => {
    const page = usePage<PageProps>()
    return page.props.config;
};
