import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Button } from "@nextui-org/react";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="h1">
          There you go... a canvas for your next Celo project!
        </div>
        <div className="h1">Happy hacking!</div>
        <Button>Click Me!!!</Button>
        {isConnected && (
          <div className="h2 text-center">Your address: {userAddress}</div>
        )}
      </div>
    </Layout>
  );
}
