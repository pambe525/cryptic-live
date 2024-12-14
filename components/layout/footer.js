import styles from "./layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <p>
        Copyright © 2025 <i>CrypticLive.net</i><br />
        All Rights Reserved
      </p>
    </footer>
  )
}