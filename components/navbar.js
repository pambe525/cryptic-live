import { IoHomeSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import NavBarLink from "./navbarlink.js";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavBarLink Icon={IoHomeSharp}>Home</NavBarLink>
      <NavBarLink active Icon={FaGraduationCap}>Course</NavBarLink>
    </nav>
  );
}