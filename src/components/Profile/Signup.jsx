import { useWorkspaceContext } from "@/context/workspaceProvider";
import React, {  useState } from "react";
import { useCookies } from "react-cookie";

// const client = require("twilio")(accountSid, authToken);

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const { setIsLoggedIn } = useWorkspaceContext();
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const userSignup = () => {
    if(isVerified && phone && password){
      fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          phone,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.isOk) {
            window.alert("Successfully Created Account")
          } else {
            window.alert(res.message);
          }
        });
    }else{
      window.alert("Please verify your phone number\nand Enter your password")
    }
  };

  const sendOtp = () => {
    setIsVerified(false);
    fetch("/api/auth/sendotp", {
      method: "POST",
      body: JSON.stringify({
        phone,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == "pending") {
          setIsCodeSent(true);
          setTimeout(() => {
            setIsCodeSent(false);
          }, 60000);
        }
      });
  };

  const verifyOtp = () => {
    fetch("/api/auth/verifyotp", {
      method: "POST",
      body: JSON.stringify({
        phone,
        otp,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == "approved") {
          setIsVerified(true);
        } else if (res.status == "pending") {
          window.alert("Doesn't match OTP code");
        } else {
          window.alert(res.status);
        }
      });
  };

  return (
    <div className="m-5">
      <p className="text-xl font-semibold">Create an account</p>
      <div className="mt-4 flex flex-col  gap-3 ">
        <div className="w-80">
          <div className="space-y-3">
          <div className="flex gap-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="py-1 px-2 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your name"
              />
            </div>
            <div className="flex gap-3">
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="py-1 px-2 w-full"
                placeholder="Number: +8801879866005"
              />
              {!isCodeSent ? (
                <button
                  onClick={sendOtp}
                  className="bg-[#2b8cff] text-white font-semibold px-2 rounded-md"
                >
                  Send
                </button>
              ) : (
                <button
                  title="Wait a minute to send sms again."
                  className="bg-slate-400 text-white  px-2 rounded-md"
                >
                  Send
                </button>
              )}
            </div>
            <div className="flex gap-3">
              <input
                className="w-full py-1 px-2 "
                type="text"
                placeholder="Verification code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={verifyOtp}
                className={`${
                  isVerified ? "bg-green-400" : "bg-[#2b8cff]"
                } text-white font-semibold px-2 rounded-md`}
              >
                {isVerified ? "Verified" : "Verify"}
              </button>
            </div>
            <div className="flex gap-3">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="py-1 px-2 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button onClick={() => setShowPassword(!showPassword)}>👁</button>
            </div>
          </div>
        </div>
        <div className="w-72">
          <button
            onClick={userSignup}
            className="bg-[#2b8cff] text-white w-full p-1 rounded-md font-semibold"
          >
            Create account
          </button>
          {/* <button onClick={userSignin} className="bg-[#2b8cff] w-full p-1 rounded-md font-semibold">
            Signin
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
