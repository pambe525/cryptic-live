import Image from "next/image";
import styles from "./index.module.css";

export const metadata = {
  title: "CrypticLive Home",
  description: "Word Puzzles for Cruciverbalists",
  icon: "/favicon.ico"
}

export default function Home() {
  return (
    <>
      <section>
        <h2 className="gradient-text">Word Puzzles for Cruciverbalists</h2>
        <p>
          Unlock the world of cryptic puzzles and challenge your mind with fellow cruciverbalists.
        </p>
        <div className={styles.side_by_side}>
          <ul className={styles.listitem}>
            <li>Learn <b>Mastering the Art of Cryptic Crosswords</b></li>
            <li><b>Daily Cryptic Clue</b> teasers</li>
            <li><b>Weekly Mini Cryptic Crossword</b></li>
            <li>Track progress with our <b>Score Tracking System</b></li>
            <li><b>Create and share</b> your own cryptic clues </li>
            <li><b>Connect</b> with other passionate crosword puzzlers</li>
          </ul>
          <Image className={styles.img_shadow} src="/crossword.png" alt="Crossword" width={140} height={140} priority />
        </div>
      </section>

      <section>
        <h2 className="gradient-text">Join the Community</h2>
        <p>
          One shared interest: <b>Cryptic Crosswords</b><br />
          Get your free account now!
        </p>
        <div>
          <a role="button">Sign Up</a> or <a role="button">Login</a>
        </div>
      </section>
    </>
  );
}
