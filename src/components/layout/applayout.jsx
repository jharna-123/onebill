import Header from "../ui/Header.jsx"

import { Outlet } from "react-router-dom"




export default function AppLayout(){
    return(
        <>
            <div  className="flex flex-col  gap-8">

            
            <main>
                <Outlet/>
            </main>

            </div>
           
            
            
        </>
    )
}