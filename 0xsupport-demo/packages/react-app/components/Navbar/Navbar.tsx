import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { RiDiscordFill } from "react-icons/ri";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar({ filled }: { filled?: boolean }) {
  const { data: session } = useSession();

  const loginLogout = async () => {
    if (session?.user?.image) {
      await signOut();
    } else {
      await signIn();
    }
  };

  return (
    <nav className={filled ? styles.NavbarFilled : styles.Navbar}>
      <h3>
        <Link href="/">0xSupport</Link>
      </h3>
      <div className={styles.Links}>
        <button className={styles.discordAuth} onClick={loginLogout}>
          <RiDiscordFill size={25} fill="#fff" />
          <span>{session?.user?.image ? "Logout" : "Login"}</span>
        </button>
        <ConnectButton chainStatus={"none"} showBalance={false} />
      </div>
    </nav>
  );
}

export default Navbar;
