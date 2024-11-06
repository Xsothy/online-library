import React, {useState} from 'react';
import {Resource} from "@/types";
import AdminLayout from "@/Layouts/AdminLayout";

const AdminPanel = ({resources}: { resources: Resource[] }) => {
    return (
        <AdminLayout resources={resources}>
            <div className="p-6 flex flex-col w-full">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
            </div>
        </AdminLayout>
    );
};

export default AdminPanel;
