"use client";

import { LondrinaSolid } from "@/utils/fonts";
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
import { useForm } from "react-hook-form";
import { SignupSchema } from "@/utils/ZodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
interface SignupFormType {
  email: string;
  password: string;
  confirmPassword: string;
}

async function callSignUpEndpoint(
  signUpData: Pick<SignupFormType, "email" | "password">
) {
  try {
    await axios
      .post("api/auth/sign-up", {
        email: signUpData.email,
        password: signUpData.password,
      })
      .then((res) => {
        toast(res.data as string);
      });
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      toast.error(error.message);
    }
  }
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<SignupFormType>({ resolver: zodResolver(SignupSchema) });

  useEffect(() => {
    if (isSubmitSuccessful)
      reset({ email: "", password: "", confirmPassword: "" });
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Card className="w-96">
        <CardHeader className="justify-center">
          <h2 className={`${LondrinaSolid.className} text-4xl tracking-wide`}>
            Create an account
          </h2>
        </CardHeader>
        <CardBody>
          <form
            action=""
            className="flex flex-col w-full h-full gap-4"
            onSubmit={handleSubmit(
              async (data) => await callSignUpEndpoint(data)
            )}
          >
            <div className="inputs w-full flex flex-col gap-2">
              <Input
                variant="bordered"
                radius="sm"
                label="Email"
                isInvalid={errors.email ? true : false}
                errorMessage={errors.email?.message}
                type="email"
                labelPlacement="outside"
                {...register("email")}
              />
              <Input
                variant="bordered"
                radius="sm"
                label="Password"
                type="password"
                isInvalid={errors.password ? true : false}
                errorMessage={errors.password?.message}
                labelPlacement="outside"
                {...register("password")}
              />
              <Input
                variant="bordered"
                radius="sm"
                label="Confirm your password"
                type="password"
                isInvalid={errors.confirmPassword ? true : false}
                errorMessage={errors.confirmPassword?.message}
                labelPlacement="outside"
                {...register("confirmPassword")}
              />
            </div>
            <Button
              variant="solid"
              color="secondary"
              className="font-semibold uppercase"
              type="submit"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </form>
        </CardBody>
        <Divider />
        <CardFooter className="w-full text-center flex items-center justify-center gap-3">
          <p>Already have an account?</p>
          <Link href={"/login"} className="link" aria-disabled={isSubmitting}>
            Log in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
