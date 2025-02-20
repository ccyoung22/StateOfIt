import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["the world", "play", "affairs", "the nation", "it."];

  useEffect(() => {
    const intervalDuration = wordIndex === 4 ? 1000 : 500; // 'it.' stays for 1 second, others 0.5 seconds
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        THE STATE OF{" "}
        <span className={styles.titleword}>{words[wordIndex]}</span>
      </p>
    </div>
  );
}

export default Header;
