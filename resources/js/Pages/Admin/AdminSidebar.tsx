import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/Components/ui/sidebar";
import {Resource} from "@/types";
import {Link} from "@inertiajs/react";

const AdminSidebar = ({ resources }: { resources: Resource[] }) => {

    return (
        <Sidebar>
            <SidebarHeader>
                <h2 className="text-xl font-semibold">Admin</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/admin'}>
                                        Dashboard
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Resources</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {resources.map((resource, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link href={'/admin/' + resource.uriKey}>
                                            { resource.label }
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AdminSidebar;
