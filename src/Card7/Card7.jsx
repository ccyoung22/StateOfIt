import styles from "./Card7.module.css";

export default function Card7() {
  return (
    <div className={styles.textcontainer7}>
      <p className={styles.para8title}>And that’s the magic of useState!</p>
      <br />{" "}
      <p className={styles.para7}>
        You now know how React tracks and updates data <br />— with a little
        help from cocktail waiters.
      </p>
      <img src="/public/Champtower.png" className={styles.champtower} />
      <p className={styles.para7title}>
        <br /> Cheers to that!
      </p>
    </div>
  );
}
