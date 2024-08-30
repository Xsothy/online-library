import {createContext, type PropsWithChildren} from "react";
import UserData = App.Data.UserData;

export const AuthContext = createContext<UserData>(
    null as unknown as UserData
);
