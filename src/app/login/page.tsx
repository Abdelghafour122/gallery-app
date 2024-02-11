"use client";

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
import { LondrinaSolid } from "../utils/fonts";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import { UseFormReset, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../utils/ZodSchemas";
import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useEffect } from "react";

type LogInFormType = {
  email: string;
  password: string;
};

type SubmitFunctionParamsType = LogInFormType & {
  reset: UseFormReset<LogInFormType>;
};

async function callLoginEndpoint(loginData: SubmitFunctionParamsType) {
  try {
    await axios.post("api/auth/sign-in", {
      email: loginData.email,
      password: loginData.password,
    });
    loginData.reset({ email: "", password: "" });
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) toast.error(error.response?.data);
  }
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful, isDirty },
  } = useForm<LogInFormType>({ resolver: zodResolver(LoginSchema) });

  useEffect(() => {
    if (isSubmitSuccessful && !isDirty) {
      redirect("/home");
    }
  }, [isSubmitSuccessful, isDirty]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Card className="w-96">
        <CardHeader className="justify-center">
          <h2 className={`${LondrinaSolid.className} text-4xl tracking-wide`}>
            Welcome back!
          </h2>
        </CardHeader>
        <CardBody>
          <form
            action=""
            onSubmit={handleSubmit(
              async (data) => await callLoginEndpoint({ ...data, reset })
            )}
            className="flex flex-col w-full h-full gap-4"
          >
            <div className="inputs w-full flex flex-col gap-2">
              <Input
                variant="bordered"
                radius="sm"
                label="Email"
                type="email"
                labelPlacement="outside"
                errorMessage={errors.email?.message}
                isInvalid={errors.email ? true : false}
                {...register("email")}
              />
              <Input
                variant="bordered"
                radius="sm"
                label="Password"
                type="password"
                description="password errors"
                labelPlacement="outside"
                errorMessage={errors.password?.message}
                isInvalid={errors.password ? true : false}
                {...register("password")}
              />
            </div>
            <Button
              variant="solid"
              color="secondary"
              className="font-semibold uppercase"
              type="submit"
              isDisabled={!isValid}
              isLoading={isSubmitting}
            >
              Log in
            </Button>
          </form>
          <div className="w-full text-center py-1 font-semibold">OR</div>
          <GoogleAuthButton />
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
