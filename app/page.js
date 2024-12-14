import Image from "next/image";

export const metadata = {
  title: "CrypticLive Home",
  description: "Word Puzzles for Cruciverbalists",
  icon: "/favicon.ico"
}

export default function HomePage() {
  return (
    <>
      <section className="darkMode">
        <h2 className="fancyText dropShadow">Word Puzzles for Cruciverbalists</h2>
        <p>
          Unlock the world of cryptic puzzles and challenge your mind with fellow cruciverbalists.
        </p>
        <div className="sideBySide">
          <ul className="listItem">
            <li>Learn <b>Mastering the Art of Cryptic Crosswords</b></li>
            <li><b>Daily Cryptic Clue</b> teasers</li>
            <li><b>Weekly Mini Cryptic Crossword</b></li>
            <li>Track progress with our <b>Score Tracking System</b></li>
            <li><b>Create and share</b> your own cryptic clues </li>
            <li><b>Connect</b> with other passionate crosword puzzlers</li>
          </ul>
          <Image className="imgShadow" src="/crossword.png" alt="Crossword" width={140} height={140} priority />
        </div>
      </section>

      <section className="darkMode">
        <h2 className="fancyText dropShadow">Join the Community</h2>
        <p>
          One shared interest: <b>Cryptic Crosswords</b><br />
          Get your free account now!
        </p>
        <a role="button" href="/auth/signup" className="fancyButton dropShadow">Sign Up</a>&emsp; or &emsp;
        <a role="button" href="/auth/login" className="fancyButton dropShadow">Login</a>
        <br /><br />
      </section>
    </>
  );
}
