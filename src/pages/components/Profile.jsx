
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const Profile = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    //console.log(userData);

  
    return(
    <div className="mt-[14.5vh] p-20 flex  gap-x-8">
        <div className="p-7 border-gray-400 border-2 w-[40vw]">
            <h1 className="text-3xl font-semibold p-4">New Customer</h1>
            <p className="text-lg p-4 font-light text-gray-500">Register Account</p>
            <p className="text-gray-400  font-light p-4">
                By creating an account you will be able to shop faster, be up to date
                on an order's status, and keep track of the orders you have previously
                made.
            </p>
            <button
                onClick={() => {
                    navigate("/register");
                }}
                className="rounded-full ml-10  mt-5 bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
                CONTINUE
            </button>
        </div>
        <div className="flex flex-col gap-y-1  p-7 border-gray-400 border-2 w-[40vw]">
            <h1 className="text-3xl font-semibold">Returning Customer</h1>
            <p className="text-lg font-LIGHT text-gray-500">
                I am a returning customer
            </p>
            {loginMessage && (
                <p
                    className={`text-center mb-4 ${loginMessage.includes("successful")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}>
                    {loginMessage}
                </p>
            )}
            <form
                action=""
                
                className="flex flex-col gap-y-3">
                <label className="font-bold" htmlFor="">Email</label>
                <input
                    className="border-gray-400  font-light border-2 px-3 py-2"
                    type="email"
                    placeholder="Email"
                    
                />
                <label className="font-bold" htmlFor="">Password</label>
                <input
                    className="border-gray-400 font-light border-2 px-3 py-2"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center gap-1">
                    <button className="rounded-full ml-10  mt-5 bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
                        SIGN IN
                    </button>
                   
                </div>
            </form>
        </div>
        
    </div>
);
};
export default Profile;