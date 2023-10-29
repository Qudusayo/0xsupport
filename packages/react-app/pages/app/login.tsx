import AuthLayout from "@/layout/AuthLayout";
import { Button, Divider, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserLocalPersistence,
  User,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import app from "@/firebase";
import { useRouter } from "next/router";

export default function Login() {
  const { push } = useRouter();
  const auth = getAuth(app);
  (async () => {
    await setPersistence(auth, browserLocalPersistence);
  })();
  const provider = new GoogleAuthProvider();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result!);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result?.user;
      if (token && user) {
        console.log({
          token,
          user,
        });
        push("/dashboard");
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error?.code;
      const errorMessage = error?.message;
      // The email of the user's account used.
      const email = error?.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  const loginWithGoogle = async () => {
    console.log("login with google");
    // signInWithPopup(auth, provider)
    //   .then(async (result) => {
    //     push("/dashboard");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    signInWithRedirect(auth, provider);
  };

  return (
    <AuthLayout type="login">
      <div className="mx-auto flex w-[90%] max-w-md flex-col gap-3">
        <h1 className="mb-4 text-center text-3xl font-medium">Welcome Back</h1>
        <form
          autoComplete="off"
          className="flex flex-col gap-4"
          onSubmit={loginForm.handleSubmit}
        >
          <Input
            type="email"
            variant="bordered"
            label="Email"
            name="email"
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
          />
          <Input
            type="password"
            variant="bordered"
            label="Password"
            name="password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
          />
          <Button size="lg" radius="full" color="primary" type="submit">
            Continue with email
          </Button>
        </form>
        <div className="my-6 flex items-center gap-4">
          <Divider className="flex-1" />
          <span>or login with</span>
          <Divider className="flex-1" />
        </div>
        <Button
          size="lg"
          radius="full"
          variant="bordered"
          color="primary"
          className="w-full"
          type="button"
          onClick={loginWithGoogle}
        >
          <FcGoogle size={25} />
          Continue with Google
        </Button>
      </div>
    </AuthLayout>
  );
}
