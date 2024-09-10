"use client";

import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = true;
  if (!isAuthenticated) {
    router.push("/auth");
  }
  return (
    <div className="mx-auto max-w-[1280px] mt-4 max-sm:p-2">
      <div className="flex gap-2 max-sm:flex-col-reverse">
        <SearchBar />
        <Button>
          <PlusCircle className="mr-2" /> Add new thought
        </Button>
      </div>
    </div>
  );
}
