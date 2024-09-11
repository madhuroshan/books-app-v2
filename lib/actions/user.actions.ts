"use server";

import { IUser, User } from "../database/user.model";
import { connectToDB } from "../database/mongoose";
import bcryptjs from "bcryptjs";
import { Secret } from "jsonwebtoken";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";

//auth actions

export const generateTokenAndSetCookie = (user: IUser) => {
  // generate jwt token and set cookie
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as Secret, {
    expiresIn: "7d",
  });

  // set cookie
  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const signup = async (params: SignUpUserParams) => {
  try {
    // create user and redirect to home page
    const { email, password, fullName, username } = params;

    await connectToDB();
    if (!email || !password || !fullName || !username) {
      throw new Error("All fields are required");
    }

    //check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    // check for unique username
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    //create user
    const user = await User.create({
      email,
      password: hashedPassword,
      fullName,
      username,
    });

    revalidatePath("/");
    generateTokenAndSetCookie(user);

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

export const checkAuth = async () => {
  try {
    // retrieve the token from the cookies
    const token = cookies().get("token")?.value;

    if (!token) {
      return false;
    }

    // verify the token using the same secret you used to sign it
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);

    // return true if the token is valid, otherwise false
    return !!decoded;
  } catch (error) {
    console.log("Auth check failed:", error);
    return false;
  }
};

export const login = async (params: LoginUserParams) => {
  try {
    // authenticate user and create a session with jwt token
    const { email, password } = params;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    await connectToDB();
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    generateTokenAndSetCookie(user);

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

export const getCurrentUser = async () => {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
    const userId = JSON.parse(JSON.stringify(decoded)).id;
    await connectToDB();
    // console.log(userId);
    const user = await User.findOne({
      _id: userId,
    });
    // console.log(user);

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = async () => {
  try {
    // destroy session
    cookies().delete("token");
    revalidatePath("/");
  } catch (error) {
    console.log(error);
    throw Error;
  }
};
