"use client";

import SearchBar from "@/components/SearchBar";
import ThoughtCard from "@/components/ThoughtCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddThoughtForm from "@/components/AddThoughtForm";

let data = [
  {
    id: 1,
    title: "Book Name 1",
    author: "Author 1",
    content:
      "This is the content of thought 1. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.",
  },
  {
    id: 2,
    title: "Book Name 2",
    author: "Author 2",
    content:
      "This is the content of thought 2. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.",
  },
];

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;
  if (!isAuthenticated) {
    router.push("/auth");
  }

  const [thoughts, setThoughts] = useState<Thought[]>(data);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="mx-auto max-w-[1280px] mt-4 max-sm:p-2">
      <div className="flex gap-2 max-sm:flex-col-reverse mb-6">
        <SearchBar />
        <Button
          onClick={() => {
            setOpenForm(true);
          }}
        >
          <PlusCircle className="mr-2" /> Add new thought
        </Button>
      </div>

      <h1 className="text-3xl font-bold">Your Thoughts</h1>

      <Separator className="my-4" />

      <div className="flex flex-wrap gap-2">
        {thoughts.map((thought) => (
          <ThoughtCard thought={thought} key={thought.id} />
        ))}
      </div>

      {
        <Dialog open={openForm}>
          <DialogContent>
            <AddThoughtForm
              setOpenForm={setOpenForm}
              setThoughts={setThoughts}
              thoughts={thoughts}
            />
          </DialogContent>
        </Dialog>
      }
    </div>
  );
}
