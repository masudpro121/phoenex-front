import { useWorkspaceContext } from "@/context/workspaceProvider";
import React, { useState } from 'react'
import { useCookies } from "react-cookie";

const Signin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const { setIsLoggedIn } = useWorkspaceContext();
  const [isVerified, setIsVerified] = useState(false);
  const userSignin = () => {
    fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        phone,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isOk) {
          setCookie("token", res.token);
          setIsLoggedIn(true);
        } else {
          window.alert(res.message);
        }
      });
  };
  return (
    <div className="m-5">
    <p className="text-xl font-semibold">Sign In</p>
    <div className="mt-4 flex flex-col  gap-3 ">
      <div className="flex w-80 gap-3 items-end">
        <div className="space-y-3">
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="py-1 px-2 w-full"
            type="number"
            placeholder="Your whatsapp number"
          />
          
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="py-1 px-2 w-full"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
        </div>
        <button onClick={() => setShowPassword(!showPassword)}>👁</button>
      </div>
      <div className="w-72">
        
        <button onClick={userSignin} className="bg-[#2b8cff] text-white w-full p-1 rounded-md font-semibold">
          Signin
        </button>

       
      </div>
    </div>
  </div>
  )
}

export default Signin