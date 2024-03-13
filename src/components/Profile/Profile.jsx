import { useWorkspaceContext } from "@/context/workspaceProvider";
import { MyContext } from "@/pages/_app";
import React from 'react'
import { useCookies } from "react-cookie";
const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const  {setIsLoggedIn} = useWorkspaceContext()
  const logout = () => {
    removeCookie('token')
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile