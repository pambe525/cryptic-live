import Image from "next/image";
import styles from "./layout.module.css";
import Navbar from "./navbar.js";
import logo from "/public/logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <Image src={logo} alt="Logo" width={180} height={40} />
        </a>
        <hr />
        <Navbar />
      </header>
    </>
  )
}