import React from "react";
import { Avatar, Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

export default function Username() {
  const pathname = usePathname();
  return (
    <section className="pb-20">
      <div className="bg-[url('https://buymeacoffee.qudusayo.me/static/media/banner.f7268714.png')] h-72 relative bg-center bg-cover">
        <div className="w-fit absolute top-48 inset-0 mx-auto">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-36 h-36 text-large border-4 border-white"
          />
        </div>
      </div>
      <div className="text-center mt-14">
        <h2 className="text-3xl">{pathname?.slice(1)}</h2>
        <span className="font-medium mt-2 inline-block">Developer</span>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-5 gap-10 mt-10">
        <div className="col-span-3 flex flex-col gap-6">
          <div className="border rounded-md p-5 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consequatur molestiae magni impedit itaque vel fuga magnam modi
            perspiciatis. Rem explicabo nihil, minima earum repellat veritatis,
            iste natus eaque deleniti aperiam, velit labore minus id similique
            esse. Recusandae eligendi exercitationem aspernatur deleniti id
            odio. Magnam tenetur aliquam quibusdam quisquam consequatur. Sint
            facilis excepturi accusantium minus, hic atque provident. Illum,
            deleniti.
          </div>
          <div className="border rounded-md p-5 text-sm leading-relaxed">
            <h2 className="text-xl">Recent Supporters</h2>
          </div>
        </div>
        <div className="border col-span-2 rounded-md p-5">
          <h2 className="text-2xl font-semibold">
            Give <span className="text-gray-500">Ayoola Abdulqudus</span> some
            support
          </h2>
          <div className="bg-primary-50 p-6 border border-primary rounded-lg flex items-center justify-between mt-6 my-3">
            <Image
              className="block h-10 w-10 sm:block lg:block"
              src="/logo.svg"
              width="45"
              height="45"
              alt="Celo Logo"
            />
            <span className="text-xl">
              <AiOutlineClose />
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
          >
            Support $1
          </Button>
        </div>
      </div>
    </section>
  );
}

const QuickSelector = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="border border-primary-200 hover:border-primary w-10 h-10 cursor-pointer rounded-full flex items-center justify-center">
      {placeholder}
    </div>
  );
};
