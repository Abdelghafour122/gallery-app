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
import { FcGoogle } from "react-icons/fc";
import { LondrinaSolid } from "../utils/fonts";

const LoginPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Card className="w-96">
        <CardHeader className="justify-center">
          <h2 className={`${LondrinaSolid.className} text-4xl tracking-wide`}>
            Welcome back!
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
            </div>
            <Button
              variant="solid"
              color="secondary"
              className="font-semibold uppercase"
              isDisabled
              //   isLoading
            >
              Log in
            </Button>
          </form>
          <div className="w-full text-center py-1 font-semibold">OR</div>
          <Button
            variant="bordered"
            className="font-semibold uppercase"
            endContent={<FcGoogle size={"2em"} title="Google Icon" />}
          >
            Log in with Google
          </Button>
        </CardBody>
        <Divider />
        <CardFooter className="w-full text-center flex items-center justify-center gap-3">
          <p>Need an account?</p>
          <Link href={"/signup"} className="link">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
