"use client";
import { Button } from "@nextui-org/react";

type Props = {
  error: Error;
  reset: () => void;
};

const HomepageError = ({ error, reset }: Props) => {
  console.log("Error from HomepageError:", error);
  return (
    <div>
      <p>Looks like an error just happened here, try refreshing.</p>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default HomepageError;
