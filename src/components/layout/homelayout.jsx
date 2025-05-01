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
    <div className='h-screen border-solid-red rounded-2xl'>  
        <div className='grid grid-col-1  min-h-1/12    fixed top-4 inset-x-0 max-w-4xl   mx-auto z-50'>
            
        <Header/>

        </div>
        

        <div className={`${showSidebar ? 'grid sm:grid-cols-4   gap-4 min-h-10/12 ': 'grid grid-cols-1 min-h-10/12 '}`} >
            {showSidebar && <aside className='sm:col-span-1  sm:block hidden '>
            <SidebarProvider> 
            <AppSidebar />
            <SidebarTrigger />    
            </SidebarProvider></aside>}
            
            
            
            <main className='sm:col-span-3 '> <Outlet/></main>
        </div>
        
        <div className='min-h-1/12'>
            <footer>

            </footer>
        </div>
        
    
    </div>
  )
}

export default Homelayout