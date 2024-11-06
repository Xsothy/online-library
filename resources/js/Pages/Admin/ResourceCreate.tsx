import AdminLayout from "@/Layouts/AdminLayout";
import {PageProps, Resource, ResourceData} from "@/types";
import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormBuilder} from "@/Components/form-preview";
const ResourceCreate = ({resources, resource}: {
    resources: Resource[],
    resource: Resource,
}) => {
    return (
        <AdminLayout resources={resources}>
            <Card className="w-full min-h-screen px-4 py-12 sm:px-6 lg:px-8">
                <CardHeader>
                    <CardTitle>{resource.pluralLabel}</CardTitle>
                    <CardDescription>
                        Create {resource.label}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormBuilder formFields={resource.fields}/>
                </CardContent>
            </Card>
        </AdminLayout>
    );
};

export default ResourceCreate;
