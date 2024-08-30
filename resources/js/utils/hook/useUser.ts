import {usePage} from "@/utils/hook/usePage";
import {Effect} from "effect";
import {UnAuthorizedError} from "@/errors";


export const useUser =  usePage.pipe(
    Effect.map(page => page.props.auth.user),
    Effect.flatMap(user => {
        if (!user) return Effect.fail(new UnAuthorizedError);
        return Effect.succeed(user);
    })
)
