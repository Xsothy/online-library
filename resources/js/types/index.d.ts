import {Ziggy} from "@/ziggy";

export interface User extends App.Data.UserData {}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & App.Data.ShareData;
