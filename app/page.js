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
        <ul className={styles.listitem}>
          <li>Complete a course on <b>Mastering the Art of Cryptic Crosswords</b></li>
          <li><b>Daily Cryptic Clue</b> teasers to keep your mind sharp</li>
          <li><b>Weekly Mini Cryptic Crossword</b></li>
          <li>Track your progress with our <b>Score Tracking System</b></li>
          <li>Create and share your own cryptic clues </li>
          <li>Connect with other passionate crosword puzzle enthusiasts</li>
        </ul>
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
