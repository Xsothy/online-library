import {Authenticated, Refine, RefineProps,} from "@refinedev/core";
import {DevtoolsPanel, DevtoolsProvider} from "@refinedev/devtools";
import {AntdInferencer} from "@refinedev/inferencer/antd";

import {ErrorComponent, ThemedLayoutV2, ThemedSiderV2, useNotificationProvider,} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {App as AntdApp} from "antd";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {authProvider} from "./authProvider";
import {Header} from "@/Components/header";
import {ColorModeContextProvider} from "./contexts/color-mode";
import {ForgotPassword} from "@/Pages/forgotPassword";
import {Login} from "@/Pages/login";
import {Register} from "@/Pages/register";
import { useConfig } from "@/hook/useConfig";

import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {runSync} from "effect/Effect";
function App()
{
    const resources: RefineProps["resources"] = [
        {
            name: "users",
            list: "/admin/users",
            create: "/admin/users/create",
            edit: "/admin/users/edit/:id",
            show: "/admin/users/show/:id",
            meta: {
                canDelete: true,
            },
        },
    ];
    const config = runSync(useConfig)
    return (
        <BrowserRouter>
            <ColorModeContextProvider>
                <AntdApp>
                    <DevtoolsProvider>
                        <Refine

                            dataProvider={dataProvider(
                                config.app.url
                            )}
                            notificationProvider={useNotificationProvider}
                            authProvider={authProvider}
                            routerProvider={routerBindings}
                            resources={resources}
                            options={{
                                syncWithLocation: true,
                                warnWhenUnsavedChanges: true,
                                useNewQueryKeys: true,
                                projectId: "T7q5HK-KVTQv3-PEDhO5",
                                title: {
                                    text: config.app.name,
                                    icon: <ApplicationLogo />,
                                },
                            }}
                        >
                            <Routes>
                                <Route
                                    element={
                                        <Authenticated
                                            key="authenticated-inner"
                                            fallback={
                                                <CatchAllNavigate to="admin/login"/>
                                            }
                                            v3LegacyAuthProviderCompatible
                                        >
                                            <ThemedLayoutV2
                                                Header={Header}
                                                Sider={(props) => (
                                                    <ThemedSiderV2
                                                        {...props}
                                                        fixed
                                                    />
                                                )}
                                            >
                                                <Outlet/>
                                            </ThemedLayoutV2>
                                        </Authenticated>
                                    }
                                >
                                    <Route
                                        index
                                        element={
                                            <NavigateToResource resource="users"/>
                                        }
                                    />
                                    <Route path="/admin/users">
                                        <Route
                                            index
                                            element={<AntdInferencer/>}
                                        />
                                        <Route
                                            path="create"
                                            element={<AntdInferencer/>}
                                        />
                                        <Route
                                            path="edit/:id"
                                            element={<AntdInferencer/>}
                                        />
                                        <Route
                                            path="show/:id"
                                            element={<AntdInferencer/>}
                                        />
                                    </Route>
                                    <Route
                                        path="*"
                                        element={<ErrorComponent/>}
                                    />
                                </Route>
                                <Route
                                    element={
                                        <Authenticated
                                            key="authenticated-outer"
                                            fallback={<Outlet/>}
                                            v3LegacyAuthProviderCompatible
                                        >
                                            <NavigateToResource/>
                                        </Authenticated>
                                    }
                                >
                                    <Route
                                        path="admin/login"
                                        element={<Login/>}
                                    />
                                    <Route
                                        path="admin/register"
                                        element={<Register/>}
                                    />
                                    <Route
                                        path="admin/forgot-password"
                                        element={<ForgotPassword/>}
                                    />
                                </Route>
                            </Routes>
                            <UnsavedChangesNotifier/>
                            <DocumentTitleHandler/>
                        </Refine>
                        <DevtoolsPanel />
                    </DevtoolsProvider>
                </AntdApp>
            </ColorModeContextProvider>
        </BrowserRouter>
    );
}

export default App;
