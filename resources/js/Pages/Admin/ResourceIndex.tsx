import AdminLayout from "@/Layouts/AdminLayout";
import {PageProps, Resource, ResourceData} from "@/types";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger} from "@/Components/ui/dropdown-menu";
import {DataTable, DataTableColumnHeader} from "@/Components/ui/data-table";
import {ColumnDef} from "@tanstack/react-table";
import {Link} from "@inertiajs/react";
import {MoreHorizontal} from "lucide-react";
import {Button} from "@/Components/ui/button";

const AdminIndex = ({resources, resource}: {
    resources: Resource[],
    resource: Resource,
}) => {
    const columns: ColumnDef<ResourceData>[] = [
        {
            accessorKey: "id",
            header: ({column}) => {
                return (
                    <DataTableColumnHeader
                        column={column}
                        title={"ID"}
                    />
                )
            },
            cell: ({row}) => {
                return row.getUniqueValues("id") ?? null;
            },
        },
        ...resource.fields.map((field, index) => ({
            accessorKey: field.name,
            header: ({column}) => {
                return (
                    <DataTableColumnHeader
                        column={column}
                        title={field.label}
                    />
                )
            },
            cell: ({row}) => {
                return row.getValue(field.name) ?? field.default;
            },
            enableSorting: field.sortable,
            enableColumnFilter: field.searchable,
        })) as ColumnDef<ResourceData>[],
        {
            accessorKey: "actions",
            header: ({column}) => {
                return (
                    <DataTableColumnHeader
                        column={column}
                        title={"Actions"}
                    />
                )
            },
            cell: ({row}) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-5 w-5"/>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                                <Link href={'/admin/' + resource.uriKey + '/' + row.getValue("id")}>
                                    View
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={'/admin/' + resource.uriKey + '/' + row.getValue("id")}>
                                    Edit
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href={'/admin/' + resource.uriKey + '/' + row.getValue("id")}>
                                    Delete
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
            enableSorting: false,
            enableColumnFilter: false,
        }
    ]

    return (
        <AdminLayout resources={resources}>
            <Card className="w-full min-h-screen px-4 py-12 sm:px-6 lg:px-8">
                <CardHeader>
                    <CardTitle>{resource.pluralLabel}</CardTitle>
                    <CardDescription>
                        {resource.label} Management
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={resource.data}/>
                </CardContent>
            </Card>
        </AdminLayout>
    );
};

export default AdminIndex;
