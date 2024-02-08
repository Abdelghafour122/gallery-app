"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <form
      action="/api/auth/sign-out"
      method="POST"
      onSubmit={() => setLoading(true)}
    >
      <Button className="bg-red-800" isLoading={loading} type="submit">
        logout
      </Button>
    </form>
  );
};

export default LogoutButton;
