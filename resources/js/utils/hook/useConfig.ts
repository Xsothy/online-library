import {usePage} from "@/utils/hook/usePage";
import {Effect, pipe} from "effect";


export const useConfig = () => {
    return usePage().pipe(
        Effect.map((page) => page.props.config)
    )
};
