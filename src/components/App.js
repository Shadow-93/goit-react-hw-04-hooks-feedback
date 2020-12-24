import React, { useState, useEffect } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedBackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const increment = (e) => {
    switch (e.target.name) {
      case "good":
        setGood((prevState) => prevState + 1);
        setTotal((prevState) => prevState + 1);
        break;

      case "neutral":
        setNeutral((prevState) => prevState + 1);
        setTotal((prevState) => prevState + 1);
        break;

      case "bad":
        setBad((prevState) => prevState + 1);
        setTotal((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setPositive(Math.round((good / total) * 100));
  }, [good, total]);

  const keys = ["good", "neutral", "bad"];

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

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const total = (acc, value) => acc + value;
//     return Object.values(this.state).reduce(total);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;

//     return Math.round((good / total) * 100);
//   };

//   increment = (e) => {
//     const key = e.target.name;
//     this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
//   };

//   render() {
//     const keys = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={keys} onLeaveFeedback={this.increment} />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification title={"No feedback given"} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
