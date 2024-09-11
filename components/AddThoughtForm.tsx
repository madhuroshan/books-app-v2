"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { IUser } from "@/lib/database/user.model";
import { createThought } from "@/lib/actions/thought.actions";

interface AddThoughtFormProps {
  setOpenForm: (value: boolean) => void;
  setThoughts: (value: Thought[]) => void;
  thoughts: Thought[];
  user: IUser;
}

const AddThoughtForm = ({
  setOpenForm,
  setThoughts,
  thoughts,
  user,
}: AddThoughtFormProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpenForm(false);
    await createThought({ userId: user._id as string, title, author, content });
    window.location.reload();
    setTitle("");
    setAuthor("");
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        placeholder="Author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <Textarea
        placeholder="Add your Thoughts.."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button type="submit">Create Thought</Button>
    </form>
  );
};

export default AddThoughtForm;
