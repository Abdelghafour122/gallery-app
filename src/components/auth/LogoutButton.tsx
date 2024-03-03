"use client";
import { logout } from "@/app/actions";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <form action={logout} onSubmit={() => setLoading(true)}>
      <Button className="bg-red-800" isLoading={loading} type="submit">
        logout
      </Button>
    </form>
  );
};

export default LogoutButton;
