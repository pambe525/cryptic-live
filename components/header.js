import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src="/logo.png" alt="Logo" width={180} height={40} priority />
      </header>
    </>
  )
}