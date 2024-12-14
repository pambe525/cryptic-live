import Image from "next/image";
import styles from "./layout.module.css";
import Navbar from "./navbar.js";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <Image src="/logo.png" alt="Logo" width={180} height={40} priority />
        </a>
        <hr />
        <Navbar />
      </header>

    </>
  )
}