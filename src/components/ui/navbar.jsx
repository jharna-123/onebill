// import React from 'react'
import { SignInButton, SignedIn, SignedOut, SignUp, UserButton } from "@clerk/clerk-react"; 
import {motion, useScroll} from "motion/react" 
import logo from "../../assets/OneBill.png"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import {Link} from "react-router-dom"

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("", className ="w-[679px] relative ")}>
      <Menu setActive={setActive}>

        <div className="absolute inset-4 pl-2">
          <img src = {logo} className="w-[39px] h-[39px] rounded-[17px]"/>
        </div>
        
          <Link to = {"/homepage"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
          </Link>
          <Link to ="/about">
            <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              <HoveredLink href="/pro">Pro</HoveredLink>
              <HoveredLink href="/starter">Starter</HoveredLink>
            </div>
          </MenuItem>

        <Link to = {"/"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>

        <SignedOut>
          <SignInButton  mode = "modal" forceRedirectUrl = "/homepage" className= "pr-4" >SignIn</SignInButton> 
        </SignedOut >
          
        
        <SignedOut>
          <Link to ="/signup"> SignUp </Link>
        </SignedOut>
       
        
        
        
          <SignedIn>
          <div className="absolute right-3 top-4 pr-2">
            <UserButton mode = "modal" className = "h-8 w-8"  />
          </div>
          </SignedIn>

          
        
          
        

      </Menu>
    </div>
  );
}
