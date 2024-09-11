import { getCurrentUser, logout } from "@/lib/actions/user.actions";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { IUser } from "@/lib/database/user.model";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const user = await getCurrentUser();
  // const [user, setUser] = useState<IUser | null>(null);

  // useEffect(() => {
  //   const currentUser = async () => {
  //     const curr = await getCurrentUser();
  //     setUser(curr);
  //   };
  //   currentUser();
  // }, []);

  return (
    <div className="px-6 py-4 w-full flex items-center justify-between shadow-md">
      <h2 className="font-bold italic">biblio-stack</h2>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <p>{user?.fullName}</p>
          <p className="text-sm text-gray-600">{user?.username}</p>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navbar;
