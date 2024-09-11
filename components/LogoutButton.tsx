"use client";

import { logout } from "@/lib/actions/user.actions";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <Button variant={"secondary"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
