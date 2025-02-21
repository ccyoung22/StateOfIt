import styles from "./Card1.module.css";

function Card1() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>What is state?</p>
      <div className={styles.textimgcontainer}>
        <p>
          The state of the world, the state of affairs, the state of play, the
          state of it!!
          <br />
          If you’re new to the world of React, you may have seen the word state
          being banded around, but what actually is state?
          <br />
          State is like a snapshot that represents what’s going on at a specific
          moment. It’s the memory of the present — a little mind-bending, I
          know.
        </p>
        <div className={styles.imageWrapper}>
          <img src="/STATEOFYOU!.png" alt="Image" />
        </div>
      </div>
      <p className={styles.title}>Before React (with vanilla JS or jQuery)</p>
      <p>
        Back in the day, developers used direct DOM manipulation to change parts
        of a web page. Think document.getElementById and innerText updates.
        <br />
        This worked fine for small projects, but as apps grew, it got messy and
        error-prone. Managing lots of dynamic changes became a headache.
      </p>
      <p className={styles.bottomTitle}>React’s Advantage</p>
      <p>
        When state updates, React compares the virtual DOM to the real one and
        only updates what’s necessary — no more manual DOM tweaks.
        <br />
        This makes React apps faster and easier to manage.
      </p>
    </div>
  );
}

export default Card1;
