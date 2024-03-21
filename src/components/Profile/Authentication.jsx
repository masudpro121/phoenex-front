import { useWorkspaceContext } from "@/context/workspaceProvider";
import { MyContext } from "@/pages/_app";
import React, {  useState } from "react";
import { useCookies } from "react-cookie";
import Signin from "./Signin";
import Signup from "./Signup";

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
      {
        haveAccount ? <Signin/> : <Signup />
      }
      <div className="mt-4 flex flex-col  gap-3 ">
        <div className="w-72">
          
          {/* <button onClick={userSignin} className="bg-orange-400 w-full p-1 rounded-md font-semibold">
              Signin
            </button> */}

          <div className="text-center">
            <p>{haveAccount ? "Don't have an account?" : "Have account?"}</p>
            <button
              onClick={() => setHaveAccount(!haveAccount)}
              className="text-[#2b8cff] w-full font-bold "
            >
              {haveAccount ? "Create account" : "Signin"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
