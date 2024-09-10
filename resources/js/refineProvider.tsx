import {Link, router, usePage} from "@inertiajs/react";
import {
    Action,
    BaseKey,
    CrudFilters,
    CrudSorting,
    IResourceItem,
    matchResourceFromRoute,
    ParseResponse,
    ResourceContext,
} from "@refinedev/core";
import qs from "qs";
import {matchPath, useParams,} from "react-router-dom";
import {useCallback, useContext, useMemo,} from "react";
import {PageProps} from "@/types";

type GoConfig = {
    to?: string;
    query?: Record<string, unknown>;
    hash?: string;
    options?: {
        keepQuery?: boolean;
        keepHash?: boolean;
    };
    type?: "push" | "replace" | "path";
};
interface RouterProvider {
    go?: () => (config: GoConfig) => void | string
    back?: () => () => void;
    parse?: () => () => {
        resource?: IResourceItem;
        id?: BaseKey;
        action?: Action;
        pathname?: string;
        params?: {
            filters?: CrudFilters;
            sorters?: CrudSorting;
            current?: number;
            pageSize?: number;
            [key: string]: any;
        }
    };
    Link?: React.ComponentType<{ to: string; children?: React.ReactNode; }>;
}
export const stringifyConfig = {
    addQueryPrefix: true,
    skipNulls: true,
    arrayFormat: "indices" as const,
    encode: false,
    encodeValuesOnly: true,
};

export const convertToNumberIfPossible = (value: string | undefined) => {
    if (typeof value === "undefined") {
        return value;
    }
    const num = Number(value);
    if (`${num}` === value) {
        return num;
    }
    return value;
};

const inertiaRouterProvider: RouterProvider = {
    go: () => {
        const currentRoute = route().current();

        return useCallback((config: GoConfig) => {
            const url = new URL(window.location.href);
            const { hash: existingHash, search: existingSearch } = url
            const {to, query, hash, options, type} = config;

            const urlQuery = {
                ...(options?.keepQuery &&
                    existingSearch &&
                    qs.parse(existingSearch, {ignoreQueryPrefix: true})),
                ...query,
            };

            if (urlQuery.to) {
                urlQuery.to = encodeURIComponent(`${urlQuery.to}`);
            }

            const hasUrlQuery = Object.keys(urlQuery).length > 0;

            /** Get hash */
            const urlHash = `#${(
                hash ||
                (options?.keepHash && existingHash) ||
                ""
            ).replace(/^#/, "")}`;

            const hasUrlHash = urlHash.length > 1;

            const urlTo = to || "";

            const fullPath = `${urlTo}${
                hasUrlQuery ? qs.stringify(urlQuery, stringifyConfig) : ""
            }${hasUrlHash ? urlHash : ""}`;

            if (type === "path") {
                return fullPath;
            }
            return router.get(fullPath, {
                replace: type === "replace",
            });
        }, [currentRoute]);
    },
    back: () => {
        const currentRoute = route().current();
        return useCallback(() => {
            window.history.back();
        }, [currentRoute]);
    },
    parse: () => {
        let params = useParams();
        const url = new URL(window.location.href);
        const { pathname, search } = url
        const { resources } = useContext(ResourceContext);

        const { resource, action, matchedRoute } = useMemo(() => {
            return matchResourceFromRoute(pathname, resources);
        }, [resources, pathname]);

        // params is empty when useParams is used in a component that is not a child of a Route
        if (Object.entries(params).length === 0 && matchedRoute) {
            params = matchPath(matchedRoute, pathname)?.params || {};
        }

        return useCallback(() => {
            const parsedSearch = qs.parse(search, {ignoreQueryPrefix: true});

            const combinedParams = {
                ...params,
                ...parsedSearch,
            };

            const response: ParseResponse = {
                ...(resource && {resource}),
                ...(action && {action}),
                ...(params?.id && {id: decodeURIComponent(params.id)}),
                // ...(params?.action && { action: params.action }), // lets see if there is a need for this
                pathname,
                params: {
                    ...combinedParams,
                    current: convertToNumberIfPossible(
                        combinedParams.current as string
                    ) as number | undefined,
                    pageSize: convertToNumberIfPossible(
                        combinedParams.pageSize as string
                    ) as number | undefined,
                    to: combinedParams.to
                        ? decodeURIComponent(combinedParams.to as string)
                        : undefined,
                },
            };

            return response;
        }, [pathname, search, params, resource, action]);
    },
    Link: (function RefineLink(props, ref) {
        return <Link href={props.to} {...props} ref={ref} />;
    }),
};

export {
    inertiaRouterProvider
};
