import styles from "./Card4.module.css";

export default function Card4() {
  return (
    <div className={styles.container4}>
      <div className={styles.textCard2Container}>
        <p className={styles.title}>
          Let’s dive into the State of the Art cocktail bar to understand state
        </p>
        <p className={styles.para4}>
          In this analogy:
          <br />
          <ul>
            <li>
              The cocktail waiter = State. He tracks when the customer orders
              and when it’s fulfilled.
            </li>
            <li>
              The customers = User input. They drink, reorder, and change things
              up.
            </li>
            <li>
              The glass = Component. It holds the drink (data) and gets refilled
              when the customer orders something new (i.e. when state changes).
            </li>
          </ul>
          <br />
          When a customer finishes their drink and orders another, the waiter
          (state) updates the order to unfulfilled. Once the glass is refilled,
          the state changes back to fulfilled. The bartender doesn’t rebuild the
          whole bar—just refills the glass.
          <br />
          Just like React re-renders only the changed component when state
          updates.
        </p>
      </div>
    </div>
  );
}
