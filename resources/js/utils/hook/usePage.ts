import {usePage as useInertiaPage} from "@inertiajs/react";
import {Page} from "@inertiajs/core";
import {Effect} from "effect";
import {UnAuthorizedError} from "@/errors";
import {PageProps} from "@/types";


export const usePage : () => Effect.Effect<Page<PageProps>, UnAuthorizedError> = () => {

    const page = useInertiaPage<PageProps>();
    if (!page.props.auth.user) {
        return Effect.fail(new UnAuthorizedError());
    } else {
        return Effect.succeed(page);
    }

};
