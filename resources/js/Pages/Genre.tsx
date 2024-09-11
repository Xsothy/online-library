import AppLayout from "@/Layouts/AppLayout";
import {PageProps} from "@/types";

const Genre = ({genres}: PageProps<{
    genres: App.Data.GenreData[]
}>) => {
    return (
        <AppLayout>
            <h1 className="text-center text-3xl font-bold mt-20 h-screen">Genre Page</h1>
        </AppLayout>
    );
};

export default Genre;
