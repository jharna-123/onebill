import { UserButton } from "@clerk/clerk-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
export default function Homepage({ children } ) {
    return (
        <>
            <SidebarProvider>
            <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </>
        // <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        //     <h1 className="text-5xl font-bold mb-4">Welcome to OneBill</h1>
        //     <p className="text-lg mb-8">Your all-in-one billing solution.</p>
        //     <UserButton/>
        // </div>
    );
}