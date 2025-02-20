import styles from "./Card2.module.css";

export default function Card2() {
  return (
    <div className={styles.container}>
      <div className={styles.textCard2Container}>
        <p className={styles.title}>
          First, Let’s Talk About React and useState()
        </p>
        <p className={styles.para}>
          React is a JavaScript library that makes building user interfaces
          smoother. It adds a layer on top of JavaScript, letting us easily
          manipulate the DOM.
          <br />
          React uses a component-based model and mixes HTML with JavaScript
          (hello, JSX!). Instead of one big HTML file with JS sprinkled on top,
          React lets you build components that handle both structure and logic.
          <br />A few things make React super powerful:
          <ul>
            <li>
              Separation of Concerns: React lets you split your UI into reusable
              components. Each component manages its own logic and rendering.
            </li>
            <li>
              When a component updates — maybe from user input or new data —
              only that component re-renders, not the whole page. This keeps
              apps fast and your codebase neat.
            </li>
            <li>
              State Management: Enter useState(). This React hook helps track
              changeable data — like user input, counters, or toggled elements.
            </li>
          </ul>
          <br />
          When state updates, React re-renders the component to reflect the
          change.
        </p>
        <p className={styles.title}>What Kind of Data Goes in State?</p>
        <p className={styles.para}>
          State is used to track dynamic data — things that can change over time
          or based on user actions. Common examples include:
          <br />
          <ul>
            <li>User input: Form fields, search bars, or text areas.</li>
            <li>UI toggles: Opening/closing modals, dropdowns, or sidebars.</li>
            <li>Counters: Like tracking the number of items in a cart.</li>
            <li>API data: Fetched data that updates the UI.</li>
            <li>Theme changes: Switching between light/dark modes.</li>
          </ul>
          <br />
        </p>
        <p className={styles.bottomText}>
          If something changes over time or based on
          <br />
          user interaction, it probably belongs in state.
        </p>
      </div>
    </div>
  );
}
