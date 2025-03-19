import { IoHomeSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import NavbarLink from "./navbarlink.js";
import styles from "./layout.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavbarLink active Icon={IoHomeSharp} href="/">Home</NavbarLink>
      <NavbarLink Icon={FaGraduationCap} href="/course">Course</NavbarLink>
    </nav>
  );
}