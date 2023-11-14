import AuthLayout from "@/layout/AuthLayout";
import { Button, Divider, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const signUpForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <AuthLayout type="signup">
      <div className="mx-auto flex w-[90%] max-w-md flex-col gap-3">
        <h1 className="mb-4 text-center text-3xl ">Sign Up</h1>
        <form
          autoComplete="off"
          className="flex flex-col gap-4"
          onSubmit={signUpForm.handleSubmit}
        >
          <Input
            type="email"
            variant="bordered"
            label="Email"
            name="email"
            value={signUpForm.values.email}
            onChange={signUpForm.handleChange}
            onBlur={signUpForm.handleBlur}
          />
          <Input
            type="password"
            variant="bordered"
            label="Password"
            name="password"
            value={signUpForm.values.password}
            onChange={signUpForm.handleChange}
            onBlur={signUpForm.handleBlur}
          />
          <Button size="lg" radius="full" color="primary" type="submit">
            Continue with email
          </Button>
        </form>
        <div className="my-6 flex items-center gap-4">
          <Divider className="flex-1" />
          <span>or signup with</span>
          <Divider className="flex-1" />
        </div>
        <Button
          size="lg"
          radius="full"
          variant="bordered"
          color="primary"
          className="w-full"
        >
          <FcGoogle size={25} />
          Sign up with Google
        </Button>
      </div>
    </AuthLayout>
  );
}
