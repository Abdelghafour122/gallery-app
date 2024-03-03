"use client";
import { Button } from "@nextui-org/react";

type Props = {
  error: Error;
  reset: () => void;
};

const EditProfileError = ({ error, reset }: Props) => {
  console.log("Error from EditProfileError:", error);
  return (
    <div>
      <p>Looks like an error just happened here, try refreshing.</p>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default EditProfileError;
