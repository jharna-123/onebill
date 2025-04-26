import Header from "../ui/Header.jsx"
import Footer from "../ui/Footer.jsx"
import { Outlet } from "react-router-dom"




export default function AppLayout(){
    return(
        <>
            
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}