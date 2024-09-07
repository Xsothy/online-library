import {usePage} from "@/hook/usePage";
import {Effect} from "effect";


export const useConfig =  usePage.pipe(Effect.map(page => page.props.config))
