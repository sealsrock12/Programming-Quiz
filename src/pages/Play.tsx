import { useState } from "react";
import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";

import styles from "@/styles/Play.module.scss";

import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";

export default function Play() {
  function submit() {
    if (onSolution) {
      setProblemInfo(generator());
      setOnSolution(false);
      setSelected(-1);
      setTypeText("PROBLEM");
    }
    if (selected === -1) {
      return;
    }

    setOnSolution(true);

    if (selected === problemInfo.answer) {
      setTypeText("CORRECT!");
    } else {
      setTypeText("Sorry, incorrect.");
    }

    console.log(problemInfo.solution);
    console.log(problemInfo.options);
  }

  function onOptionSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(parseInt(e.currentTarget.value));
  }

  const [problemInfo, setProblemInfo] = useState(generator());
  const [onSolution, setOnSolution] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [typeText, setTypeText] = useState("PROBLEM");
  localStorage.setItem("lang", problemInfo.lang);
  localStorage.setItem("id", problemInfo.id.toString());

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Play | Programming Quiz</title>
      </Helmet>

      <Menu playSelected />

      <article className={styles.problemContainer}>
        <div className={[styles.problem, "problem-container"].join(" ")}>
          <h1 className={styles.typeText}>{typeText}</h1>

          <ReactMarkdown>
            {onSolution ? problemInfo.solution : problemInfo.problem}
          </ReactMarkdown>
        </div>
        <div className={styles.optionsContainer}>
          <div className={styles.options}>
            {problemInfo.options.map((option, index) => {
              return (
                <div className={styles.option} key={uuidv4()}>
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name={`option`}
                    value={index}
                    checked={selected === index}
                    onChange={onOptionSelect}
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.controls}>
          <Button className={styles.submit} title="submit" onClick={submit}>
            {onSolution ? "NEXT" : "SUBMIT"}
          </Button>
          <Button title="submit" nonExistent={onSolution}>
            GIVE UP
          </Button>
        </div>
      </article>
    </main>
  );
}
