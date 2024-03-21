import Profile from "@/components/Profile/Profile"
import Signin from "@/components/Profile/Authentication"
import React, { useContext, useEffect, useState } from 'react'
import Authentication from "@/components/Profile/Authentication"
import { useCookies } from "react-cookie";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import DashboardLayout from "@/components/layouts/dashboard";

const profile = () => {
  const {isLoggedIn, setIsLoggedIn} = useWorkspaceContext()
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  useEffect(()=>{
    if(cookies.token){
      setIsLoggedIn(true)
    }
  },[])
  return (
    <DashboardLayout>
      {
        isLoggedIn ? <Profile />
        : <Authentication />
      }
    </DashboardLayout>
  )
}

export default profile