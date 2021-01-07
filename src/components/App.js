import React, { useState } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedBackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ["good", "neutral", "bad"];

  const increment = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const positive = Math.round((good / total) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={increment} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification title={"No feedback given"} />
        )}
      </Section>
    </>
  );
}
