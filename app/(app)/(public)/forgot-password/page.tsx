"use client";

import { useState } from "react";

export default async function Page() {

  const [email, setEmail] = useState("");
  return (
    <div className="h-screen flex justify-center items-center bg-slate-700 w-full">
  <div className="bg-white rounded-lg shadow-lg px-10 pt-10 w-[420px] h-[480px] flex justify-center text-black flex-col ">
    <div className="border-b">
    <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
    </div>
    <div>
    <input className="border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black" placeholder="Email" />
    
  </div>
  <div>
    <button className= "bg-black text-white rounded-lg w-full h-10 px-3 mt-5" >Submit</button>
    </div>
    </div>
  </div>);
}
