import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IUser } from "./database/user.model";
import jwt, { Secret } from "jsonwebtoken";
import { cookies } from "next/headers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
