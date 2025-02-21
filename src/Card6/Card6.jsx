import { useState } from "react";
import styles from "./Card6.module.css";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState("");

  const questions = [
    {
      question: "1. What does React’s virtual DOM help with?",
      options: [
        "A. Efficiently updating only changed parts of the UI",
        "B. Directly editing the real DOM",
        "C. Saving state to a database",
      ],
      correctAnswer: "A",
    },
    {
      question: "2. What triggers a component re-render in React?",
      options: [
        "A. A page refresh",
        "B. A change in state or props",
        "C. A new import",
      ],
      correctAnswer: "B",
    },
    {
      question:
        "3. What was the main issue with direct DOM manipulation before React?",
      options: [
        "A. It was hard to manage as projects grew",
        "B. It made pages load too fast",
        "C. It required TypeScript",
      ],
      correctAnswer: "A",
    },
    {
      question:
        "4. Which hook do you use to manage state in a functional component?",
      options: ["A. useEffect", "B. useState", "C. useRef"],
      correctAnswer: "B",
    },
    {
      question:
        "5. What happens if you pass a state update directly in a JSX event handler?",
      options: [
        "A. It will only run when the event is triggered",
        "B. It will run immediately when the component renders",
        "C. It will update the state without triggering a re-render",
      ],
      correctAnswer: "B",
    },
    {
      question: "6. What kind of data should be stored in state?",
      options: [
        "A. Static data that doesn’t change",
        "B. Dynamic data that changes over time or with user interaction",
        "C. Functions or constants",
      ],
      correctAnswer: "B",
    },
  ];

  const handleAnswerSelection = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer,
    });
    if (answer === questions[questionIndex].correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect, try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz Time</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p className={styles.para6}>{question.question}</p>
          <div className={styles.buttonContainer}>
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleAnswerSelection(index, option[0])}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswers[index] && (
            <p className={styles.answer}>
              {selectedAnswers[index] === question.correctAnswer
                ? "Correct!"
                : "Incorrect, try again."}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
