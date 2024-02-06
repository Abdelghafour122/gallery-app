import { LondrinaSolid } from "../utils/fonts";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Card className="w-96">
        <CardHeader className="justify-center">
          <h2 className={`${LondrinaSolid.className} text-4xl tracking-wide`}>
            Create an account
          </h2>
        </CardHeader>
        <CardBody>
          <form action="" className="flex flex-col w-full h-full gap-4">
            <div className="inputs w-full flex flex-col gap-2">
              <Input
                variant="bordered"
                radius="sm"
                label="Email"
                description="this will be replaced with error msg if it exists"
                type="email"
                labelPlacement="outside"
              />
              <Input
                variant="bordered"
                radius="sm"
                label="Password"
                type="password"
                description="password errors"
                labelPlacement="outside"
              />
              <Input
                variant="bordered"
                radius="sm"
                label="Confirm your password"
                type="password"
                description="confirm password errors"
                labelPlacement="outside"
              />
            </div>
            <Button
              variant="solid"
              color="secondary"
              className="font-semibold uppercase"
              isDisabled
            >
              Submit
            </Button>
          </form>
        </CardBody>
        <Divider />
        <CardFooter className="w-full text-center flex items-center justify-center gap-3">
          <p>Already have an account?</p>
          <Link href={"/login"} className="link">
            Log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
