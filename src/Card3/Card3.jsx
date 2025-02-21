import { useState } from "react";
import styles from "./Card3.module.css";

export default function CocktailStateCard() {
  const [isDrinkFull, setIsDrinkFull] = useState(true);
  const [orderStatus, setOrderStatus] = useState("Order: Fulfilled");

  const handleDrink = () => {
    if (isDrinkFull) {
      setTimeout(() => setIsDrinkFull(false), 500);
    }
  };

  const handleOrder = () => {
    setOrderStatus("Order: Unfulfilled");

    setTimeout(() => {
      setIsDrinkFull(true);
      setTimeout(() => setOrderStatus("Order: Fulfilled"), 500);
    }, 1000);
  };

  return (
    <div className={styles.card}>
      <div className={styles.buttons}>
        <button className={styles.button2} onClick={handleDrink}>
          drink
        </button>
        <button className={styles.button2} onClick={handleOrder}>
          order
        </button>
      </div>

      <div className={styles.illustrationRow}>
        <img
          src={isDrinkFull ? "/FullDrink.png" : "/EmptyDrink.png"}
          alt="Drink"
          className={styles.imageGlass}
        />
        <div className={styles.thoughtBubble}>
          <img
            src="/ThoughtBubble.png"
            alt="Thought Bubble"
            className={styles.imageThought}
          />
          <p className={styles.orderText}>{orderStatus}</p>
        </div>
        <img src="/Waiter.png" alt="Waiter" className={styles.image} />
      </div>
    </div>
  );
}
