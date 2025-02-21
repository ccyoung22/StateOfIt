import styles from "./Card5.module.css";
import { useState } from "react";

export default function Card5() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.container4}>
      <div className={styles.textCard2Container}>
        <p className={styles.title}>Common Mistakes To Avoid With State</p>
        <p className={styles.para4}>
          <ol>
            <li>
              Mutating State Directly: Never change state variables directly.
              Always use the setter function from useState.
              <br />╳ state.value = {`${"new"}`}
              <br />
              ✔️ setState({`${"new"}`})
            </li>
            <br />
            <li>
              Overusing State: Not everything needs to go in state. Static data
              or values that don’t change can stay as regular variables or
              constants.
            </li>
            <li>
              Forgetting State is Async: State updates are asynchronous, so if
              you log state immediately after setting it, you might not see the
              new value yet.
            </li>
            <li>
              Not Wrapping State in a Callback Function: If you pass state
              updates directly in a JSX event handler, it can run immediately
              when the page renders, instead of when the event is triggered.
            </li>
          </ol>
          <br />
          For example -
          <br />
          Setting state like this {"won't"} work and could break your code:
          <br />
          {"<button onClick={setCount(count + 1)}></button> (runs on render)"}
          <br />
          Instead, we can wrap the state update in an anonymous function, so it
          only runs when the button is clicked, not when the page loads:
          <br />
          {
            "<button onClick={() => setCount(count + 1)}></button> (runs on click)"
          }
          <br />
          The only difference is that we’ve wrapped our setCount call inside an
          anonymous function!
        </p>
      </div>
    </div>
  );
}
