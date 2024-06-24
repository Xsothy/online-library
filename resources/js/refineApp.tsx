import {Authenticated, GitHubBanner, Refine, useNavigation} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { AntdInferencer } from "@refinedev/inferencer/antd"

import {
    ErrorComponent,
    ThemedLayoutV2,
    ThemedSiderV2,
    useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import {BrowserRouter, Outlet, Route, Router, Routes} from "react-router-dom";
import { authProvider } from "./authProvider";
import { AppIcon } from "@/Components/app-icon";
import { Header } from "@/Components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import * as BlogPost from "@/Pages/Admin/blog-posts";
import * as Category from "@/Pages/Admin/categories";
import { ForgotPassword } from "@/Pages/forgotPassword";
import { Login } from "@/Pages/login";
import { Register } from "@/Pages/register";

function App({ resource, action, id }: {
    resource?: string
    action?: string
    id ?: string
}) {

    return (
        <BrowserRouter>
            <GitHubBanner />
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider("https://localhost:8000")}
                                notificationProvider={useNotificationProvider}
                                authProvider={authProvider}
                                routerProvider={routerBindings}
                                resources={[
                                    {
                                        name: "blog_posts",
                                        list: "/admin/blog-posts",
                                        create: "/admin/blog-posts/create",
                                        edit: "/admin/blog-posts/edit/:id",
                                        show: "/admin/blog-posts/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                    {
                                        name: "categories",
                                        list: "/admin/categories",
                                        create: "/admin/categories/create",
                                        edit: "/admin/categories/edit/:id",
                                        show: "/admin/categories/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "T7q5HK-KVTQv3-PEDhO5",
                                    title: { text: "Refine Project", icon: <AppIcon /> },
                                }}
                            >
                                <Routes>
                                    <Route
                                        element={
                                            <Authenticated
                                                key="authenticated-inner"
                                                fallback={<CatchAllNavigate to="/login" />}
                                                v3LegacyAuthProviderCompatible
                                            >
                                                <ThemedLayoutV2
                                                    Header={Header}
                                                    Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                                                >
                                                    <Outlet />
                                                </ThemedLayoutV2>
                                            </Authenticated>
                                        }
                                    >
                                        <Route
                                            index
                                            element={<NavigateToResource resource="blog_posts" />}
                                        />
                                        <Route path="/admin/blog-posts">
                                            <Route index element={<BlogPost.BlogPostList />} />
                                            <Route path="create" element={<BlogPost.BlogPostCreate />} />
                                            <Route path="edit/:id" element={<BlogPost.BlogPostEdit />} />
                                            <Route path="show/:id" element={<BlogPost.BlogPostShow />} />
                                        </Route>
                                        <Route path="/admin/categories">
                                            <Route index element={<Category.CategoryList />} />
                                            <Route path="create" element={<Category.CategoryCreate />} />
                                            <Route path="edit/:id" element={<Category.CategoryEdit />} />
                                            <Route path="show/:id" element={<Category.CategoryShow />} />
                                        </Route>
                                        <Route path="*" element={<ErrorComponent />} />
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated
                                                key="authenticated-outer"
                                                fallback={<Outlet />}
                                                v3LegacyAuthProviderCompatible
                                            >
                                                <NavigateToResource />
                                            </Authenticated>
                                        }
                                    >
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route
                                            path="/forgot-password"
                                            element={<ForgotPassword />}
                                        />
                                    </Route>
                                </Routes>

                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                            <DevtoolsPanel />
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
