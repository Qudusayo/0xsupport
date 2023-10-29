import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "signup" | "login";
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <Image
            className="block h-12 w-12 sm:block lg:block"
            src="/logo.svg"
            width="45"
            height="45"
            alt="Logo"
          />
        </Link>
        {type === "signup" ? (
          <div>
            <span className="hidden text-sm">Already have an account?</span>
            <Link
              href="/app/login"
              className="ml-2 rounded-full border-2 border-primary-500 px-4 py-2 text-primary-500 hover:border-primary-600 hover:text-primary-600"
            >
              Login
            </Link>
          </div>
        ) : (
          <div>
            <span className="hidden text-sm md:inline-block">
              Don&apos;t have an account?
            </span>
            <Link
              href="/app/signup"
              className="ml-2 rounded-full border-2 border-primary-500 px-4 py-2 text-primary-500 hover:border-primary-600 hover:text-primary-600"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex h-full flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
