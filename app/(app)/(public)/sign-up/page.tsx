"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "postcss";
import input from "postcss/lib/input";
import Link from "next/link";

export default async function Page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const router = useRouter();
  const handleSignIn = (e: any) => {
    router.push("/login");
  };

  const handleSignUp = () => {
    alert("You have successfully signed up!");
  }


  console.log(email, password, confirmPassword, userName, displayName);

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     alert("Passwords don't match");
  //     return;
  //   }
  //   try {
  //     const res = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     if (res.status === 200) {
  //       alert("You have successfully signed up!");
  //     } else {
  //       alert("Something went wrong.");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-700 w-full">
    <div className="bg-white rounded-lg shadow-lg p-10 w-[420px] h-[520px] flex justify-center  text-black flex-col ">
      <div>
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
      </div>
      <div>
        <div className="flex justify-between gap-2">
          <input
            className="border border-gray-300 rounded-lg w-[50%] h-12 px-3 mt-5 focus:outline-none focus:border-black"
            placeholder="Display Name"
            onChange={(input) => setDisplayName(input.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg w-[50%] h-12 px-3 mt-5 focus:outline-none focus:border-black"
            placeholder="User Name"
            onChange={(input) => setUserName(input.target.value)}
          />
        </div>
        <input
          className="border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black"
          placeholder="Email"
          onChange={(input) => setEmail(input.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black"
          placeholder="Password"
          type="password"
          onChange={(input) => setPassword(input.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black"
          placeholder="Confirm password"
          type="password"
          onChange={(input) => setConfirmPassword(input.target.value)}
        />
      </div>
      <div>
        <button className="bg-black text-white rounded-lg w-full h-10 px-3 mt-5" onClick={() => console.log("rda")}>
          Sign up
        </button>
      </div>
      <div>
        <p className="text-center mt-5">
          Already have an account?
          <Link href={"/login"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}
