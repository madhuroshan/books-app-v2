"use server";

import { revalidatePath } from "next/cache";
import { Thought } from "../database/thought.model";

export const getThoughts = async ({ userId }: { userId: string }) => {
  try {
    const thoughts = await Thought.find({ user: userId });
    // console.log(thoughts);
    return JSON.parse(JSON.stringify(thoughts));
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

export const createThought = async (params: CreateThoughtParams) => {
  const { userId, title, author, content } = params;

  try {
    const thought = new Thought({
      user: userId,
      title,
      author,
      content,
    });

    await thought.save();
    revalidatePath("/");
    return JSON.parse(JSON.stringify(thought));
  } catch (error) {
    console.log(error);
    throw Error;
  }
};
