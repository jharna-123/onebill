import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
 
} from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Welcome from './pages/welcome.jsx';
import './App.css';
import Homepage from './pages/homepage.jsx';
import AppLayout from "./components/layout/applayout.jsx";
import Enterprise from "./pages/Pricing/enterprice.jsx"
import Starter from "./pages/Pricing/starter.jsx"
import  Pro from "./pages/Pricing/pro.jsx"
import About from"./pages/about.jsx"
import Signup from "./pages/signup.jsx"
import Homelayout from "./components/layout/homelayout.jsx";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
        <Route path ="/" element ={<Homelayout/>} >
          <Route path="/" element={<Welcome />} />
               <Route path="/homepage"
                     element={
                           <>
                              <SignedIn>
                                <Homepage />
                              </SignedIn>
                              <SignedOut>
                                  <RedirectToSignIn />
                              </SignedOut>
                            </> 
                            } /> 
              {/* <Route path ="/signup" element={<Signup/>}></Route> */}
              <Route path="/pro" element={<Pro />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/starter" element={<Starter />} />
              <Route path="/about" element={<About/>} />
        </Route>
      </>


    )
  );
  
    
    return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
