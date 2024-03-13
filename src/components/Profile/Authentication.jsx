import { useWorkspaceContext } from "@/context/workspaceProvider";
import { MyContext } from "@/pages/_app";
import React, {  useState } from "react";
import { useCookies } from "react-cookie";

const Authentication = () => {
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const [haveAccount, setHaveAccount] = useState(true)
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const {setIsLoggedIn} = useWorkspaceContext()
 
  
  const userSignup = () => {
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: mail,
        password
      })
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.isOk){
        setCookie("token", res.token)
        setIsLoggedIn(true)
      }else{
        window.alert(res.message)
      }
    })
  }

  const userSignin = () => {
    fetch('/api/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: mail,
        password
      })
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.isOk){
        setCookie("token", res.token)
        setIsLoggedIn(true)
      }else{
        window.alert(res.message)
      }
    })
  }

  return (
    <div className="m-5">
      <p className="text-xl font-semibold">
        {
          haveAccount ? "Sign in to get access" : "Create an account"
        }
      </p>
      <div className="mt-4 flex flex-col  gap-3 ">
        <div className="flex w-80 gap-3 items-end">
          <div className="space-y-3">
            <input onChange={(e)=>setMail(e.target.value)} value={mail} className="py-1 px-2 w-full" type="text" placeholder="Enter your mail" />
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              className="py-1 px-2 w-full"
              type={showPassword?'text':'password'}
              placeholder="Enter your password"
            />
          </div>
          <button onClick={()=>setShowPassword(!showPassword)}>👁</button>
        </div>
        <div className="w-72">
          {
            haveAccount? 
            <button onClick={userSignin} className="bg-orange-400 w-full p-1 rounded-md font-semibold">
              Signin
            </button>
            : <button onClick={userSignup} className="bg-orange-400 w-full p-1 rounded-md font-semibold">
            Create account
          </button>
          }
          
          
          <div className="text-center">
            <p>
              {
                haveAccount ? "Don't have an account?" : "Have account?"
              }
            </p>
            <button onClick={()=>setHaveAccount(!haveAccount)} className="text-orange-500 w-full font-bold ">
              {
                haveAccount ? "Create account" : "Signin"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
