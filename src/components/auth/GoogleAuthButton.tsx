"use client";
import { Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const supabase = createClientComponentClient();

export const handleSignInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: { access_type: "offline", prompt: "consent" },
      redirectTo: `${location.origin}/api/auth/callback`,
    },
  });
};

const GoogleAuthButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      size="lg"
      variant="bordered"
      className="font-semibold uppercase"
      endContent={<FcGoogle size={"2em"} title="Google Icon" />}
      onClick={() => {
        setLoading(true);
        handleSignInWithGoogle();
      }}
      disabled={loading}
    >
      Log in with Google
    </Button>
  );
};

export default GoogleAuthButton;
