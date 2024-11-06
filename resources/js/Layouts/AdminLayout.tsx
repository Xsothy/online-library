import {SidebarProvider} from "@/Components/ui/sidebar";
import AdminSidebar from "@/Pages/Admin/AdminSidebar";
import React from "react";
import {Resource} from "@/types";

const AdminLayout = ({ children, resources }: { children: React.ReactNode, resources: Resource[] }) => {
    return (
        <SidebarProvider>
            <AdminSidebar resources={resources} />
            {children}
        </SidebarProvider>
    );
};

export default AdminLayout;
