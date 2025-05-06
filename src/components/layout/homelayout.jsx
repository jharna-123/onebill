import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../ui/Header';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
    const path = useLocation();
    const showSidebar = path.pathname !== "/"
  return (
    <div className='flex flex-col relative text-white'>
      
      
      
        <div className='grid grid-col-1  min-h-1/12  fixed top-4 inset-x-0 max-w-4xl   mx-auto z-50'>   
        <Header/>

        </div>
        

        <div className={`${showSidebar ? 'grid sm:grid-cols-12   gap-4 min-h-10/12 ': 'grid grid-cols-1 min-h-10/12 '}`} >
            {showSidebar && <aside className='sm:col-span-2  sm:block hidden '>
            <SidebarProvider> 
            <AppSidebar />
            <SidebarTrigger />    
            </SidebarProvider>
            </aside>}
            
            
            
            <main className='sm:col-span-10 '> 
            
            <div className="relative z-10 flex items-center justify-center h-full">
            <Outlet/>
            </div>
              </main>
        </div>
        
        <div className='min-h-1/12 bg-[#7B6D8D]'>
            <footer>

            </footer>
        </div>
        
    
    </div>
  )
}

export default Homelayout