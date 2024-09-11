"use client";

import { logout } from "@/lib/actions/user.actions";
import { Button } from "./ui/button";

const Navbar = () => {
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <div className="px-6 py-4 w-full flex items-center justify-between shadow-md">
      <h2 className="font-bold italic">biblio-stack</h2>
      <div className="flex gap-2">
        <div className="rounded-full bg-black text-white dark:bg-gray-500 p-2">
          MR
        </div>
        <Button variant={"secondary"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
