import { IoHomeSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import NavBarLink from "./navbarlink.js";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavBarLink active Icon={IoHomeSharp} href="/">Home</NavBarLink>
      <NavBarLink Icon={FaGraduationCap} href="/course">Course</NavBarLink>
    </nav>
  );
}