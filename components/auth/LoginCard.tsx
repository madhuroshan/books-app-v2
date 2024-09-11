"use client";

import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { login } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

interface LoginCardProps {
  setState: (state: AuthScreenState) => void;
}

const LoginCard = ({ setState }: LoginCardProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    // login user
    e.preventDefault();
    const user = await login({ email, password });

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    // reset form
    setEmail("");
    setPassword("");

    // redirect to home page
    router.push("/");
  };

  return (
    <div className="absolute w-[400px] bg-white p-6 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] border border-gray-800 rounded-lg shadow-lg text-primary">
      <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:mx-4 mb-6">
        <h1 className="font-bold text-3xl text-gray-800">Biblio Stack</h1>
        <p className="text-[16px] text-gray-600">Login to continue using</p>
      </div>

      <form action="" className="flex gap-4 flex-col" onSubmit={handleLogin}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Log in</Button>
      </form>

      <Separator className="my-4" />

      <p className="text-sm">
        Don't have an account?{" "}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={() => setState("signup")}
        >
          Sign Up
        </span>{" "}
      </p>
    </div>
  );
};

export default LoginCard;
