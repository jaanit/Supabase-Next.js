"use client";
import { useState } from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default async function Page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const router = useRouter();
  const handleSignUp = (e: any) => {
    router.push("/sign-up");
  };

  const handeleForgotPassword = () => {
    router.push("/forgot-password");
  };

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
    <div className="bg-white rounded-lg shadow-lg px-10 pt-10 w-[420px] h-[480px] flex justify-center text-black flex-col ">
      <div className="border-b">
        <h1 className="text-2xl font-bold text-center mb-2">Sign in</h1>
      </div>
      <div>
        <input
          className="border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black"
          placeholder="Email"
          onChange={(input) => setEmail(input.target.value)}
        />
        <input
          className="border border-gray-300 rounded-lg w-full h-12 px-3 mt-5 focus:outline-none focus:border-black"
          placeholder="Password"
          onChange={(input) => setPassword(input.target.value)}
        />
      </div>
      <div className="my-2">
        <a href="#" className="text-blue-500" onClick={handeleForgotPassword}>
          Forgotten password?
        </a>
      </div>
      <div>
        <button className="bg-black text-white rounded-lg w-full h-10 px-3 mt-5">
          Sign in
        </button>
      </div>
      <div className="my-2">
        <p className="text-center">
          Need an account?{" "}
          <Link href={"/sign-up"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}
