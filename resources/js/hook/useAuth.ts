import {usePage} from "@/hook/usePage";
import {Effect} from "effect";
import {UnAuthorizedError} from "@/errors";


export const useAuth =  usePage.pipe(
    Effect.map(page => page.props.auth),
    Effect.flatMap(auth => {
        if (!auth) return Effect.fail(new UnAuthorizedError);
        return Effect.succeed(auth);
    })
)
