import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";

export default function Header() {
  const { open: connect } = useWeb3Modal();
  const router = useRouter();

  return (
    <div className="mx-auto mt-4 flex w-full max-w-5xl items-center justify-between rounded-full bg-white px-4 py-2">
      <Image
        className="block h-12 w-12 sm:block lg:block"
        src="/logo.svg"
        width="45"
        height="45"
        alt="Celo Logo"
      />
      <div className="flex gap-2">
        <Button
          radius="full"
          variant="light"
          onClick={() => router.push("/app/login")}
        >
          Login
        </Button>
        <Button
          radius="full"
          variant="solid"
          color="primary"
          onClick={() => router.push("/app/signup")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

// declare global {
//   interface Window {
//     ethereum: any;
//   }
// }
