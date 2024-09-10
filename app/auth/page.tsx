"use client";
import LoginCard from "@/components/auth/LoginCard";
import SignUpCard from "@/components/auth/SignUpCard";
import { useState } from "react";

const AuthScreen = () => {
  const [state, setState] = useState<AuthScreenState>("login");

  return state === "login" ? (
    <LoginCard setState={setState} />
  ) : (
    <SignUpCard setState={setState} />
  );
};

export default AuthScreen;
