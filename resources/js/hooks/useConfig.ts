import {usePage} from "@/hooks/usePage";
import {Effect} from "effect";


export const useConfig =  usePage.pipe(Effect.map(page => page.props.config))
