import {Refine, RefineProps,} from "@refinedev/core";

import {useNotificationProvider,} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import dataProvider from "@refinedev/simple-rest";
import {inertiaRouterProvider} from '@/refineProvider'
import {authProvider} from "@/authProvider";
import {useConfig} from "@/hooks/useConfig";

import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {runSync} from "effect/Effect";

function RefineAppLayout({children}: { children: React.ReactNode }) {
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
        <Refine
            dataProvider={dataProvider(
                config.app.url + 'api'
            )}
            notificationProvider={useNotificationProvider}
            authProvider={authProvider}
            routerProvider={inertiaRouterProvider}
            resources={resources}
            options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "T7q5HK-KVTQv3-PEDhO5",
                title: {
                    text: config.app.name,
                    icon: <ApplicationLogo/>,
                },
            }}
        >
            {children}
        </Refine>
    );
}

export {RefineAppLayout};
