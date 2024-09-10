"use client";

import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/lib/actions/user.actions";

interface SignUpCardProps {
  setState: (state: AuthScreenState) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // signup user

    // check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await signup({ email, password, fullName, username });

    // reset form
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");

    // redirect to home page
    router.push("/");
  };

  return (
    <div className="absolute w-[400px] bg-white p-6 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] border border-gray-800 rounded-lg shadow-lg text-primary">
      <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:mx-4 mb-6">
        <h1 className="font-bold text-3xl text-gray-800">
          Sign up for Biblio Stack
        </h1>
        <p className="text-[16px] text-gray-600">Sign up to continue using</p>
      </div>

      <form action="" className="flex gap-4 flex-col" onSubmit={handleSignUp}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Sign up</Button>
      </form>

      <Separator className="my-4" />

      <p className="text-sm">
        Don't have an account?{" "}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={() => setState("login")}
        >
          Sign Up
        </span>{" "}
      </p>
    </div>
  );
};

export default SignUpCard;
