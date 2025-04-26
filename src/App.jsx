import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
 
} from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import SignUp from './pages/signup.jsx';
import SignIn from './pages/signin.jsx';
import Welcome from './pages/welcome.jsx';
import './App.css';
import Homepage from './pages/homepage.jsx';
import AppLayout from "./components/layout/applayout.jsx";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<h1 className="text-center text-2xl mt-10">404 - Page Not Found</h1>} />
        <Route path ="/" element ={<AppLayout/>} 
          children ={
              <>
              <Route path="/" element={<Welcome />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
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
                </>
                    }/>
                  
        
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
