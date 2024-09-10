"use client";

import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import React from "react";
import { Button } from "../ui/button";

interface LoginCardProps {
  setState: (state: AuthScreenState) => void;
}

const LoginCard = ({ setState }: LoginCardProps) => {
  return (
    <div className="absolute w-[400px] bg-white p-6 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] border border-gray-800 rounded-lg shadow-lg text-primary">
      <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:mx-4 mb-6">
        <h1 className="font-bold text-3xl text-gray-800">Biblio Stack</h1>
        <p className="text-[16px] text-gray-600">Login to continue using</p>
      </div>

      <form action="" className="flex gap-4 flex-col">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
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
