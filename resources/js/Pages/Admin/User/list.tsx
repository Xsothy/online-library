import {RefineAppLayout} from "@/Layouts/RefineAppLayout";
import {useQuery} from "react-query";
import {useTable} from "@refinedev/antd";
const UserList = () => {
    const s = useTable({
        syncWithLocation: false,
    });
    const {data: posts} = useQuery<App.Data.UserData[]>({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('/api/users');
            return response.json();
        },
    });
    return (
        <RefineAppLayout>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Users</h1>
                    <div className="flex flex-col gap-2">
                        {posts?.map((post) => (
                            <div key={post.id} className="flex flex-col gap-2">
                                <div className="text-xl font-bold">{post.name}</div>
                                <div className="text-sm">{post.id}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </RefineAppLayout>
    );
};

export default UserList;
