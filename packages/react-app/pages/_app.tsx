import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { celoAlfajores } from "wagmi/chains";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [celoAlfajores];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <WagmiConfig config={wagmiConfig}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </WagmiConfig>
    </NextUIProvider>
  );
}

export default App;
