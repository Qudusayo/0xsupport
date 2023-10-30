import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import logo from "./../assets/logo.svg";
import IconX from "../assets/icon-x";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function Tip() {
  const { open: connect } = useWeb3Modal();

  function tipUser() {
    connect();
  }

  return (
    <div className="border col-span-2 rounded-md p-5 max-w-sm">
      <h2 className="text-lg font-semibold">
        Give <span className="text-gray-500">Ayoola Abdulqudus</span> some
        support
      </h2>
      <div className="bg-primary-50 p-6 border border-primary rounded-lg flex items-center justify-between mt-6 my-3">
        <img
          className="block h-10 w-10 sm:block lg:block"
          src={logo}
          width="45"
          height="45"
          alt="Celo Logo"
        />
        <span className="text-xl">
          <IconX />
        </span>
        <QuickSelector placeholder="1" />
        <QuickSelector placeholder="3" />
        <QuickSelector placeholder="5" />
        <input
          className="w-10 h-10 border outline-none text-center rounded-md"
          maxLength={5}
        />
      </div>
      <Input
        size="md"
        type="text"
        placeholder="Name or @yourtwitter (optional)"
        radius="sm"
        className="my-3"
      />
      <Textarea
        placeholder="Say something nice (optional)"
        fullWidth
        radius="sm"
        className="my-3"
        minRows={3}
      />
      <Checkbox defaultSelected size="sm">
        Make this message private
      </Checkbox>
      <Button
        className="block my-3"
        radius="full"
        color="primary"
        fullWidth
        onClick={tipUser}
      >
        Support $1
      </Button>
    </div>
  );
}

const QuickSelector = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="border border-primary-200 hover:border-primary w-10 h-10 cursor-pointer rounded-full flex items-center justify-center">
      {placeholder}
    </div>
  );
};
