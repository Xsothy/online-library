import {usePage as useInertiaPage} from "@inertiajs/react";
import {Page} from "@inertiajs/core";
import {Effect} from "effect";
import type {PageProps} from "@/types";

// @ts-ignore
export const usePage : Effect.Effect<Page<PageProps>> = Effect.sync(useInertiaPage)
