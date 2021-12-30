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
    if (selected === problemInfo.answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }

    console.log(problemInfo.solution);
    console.log(problemInfo.options);

    setOnSolution(true);
  }

  function onOptionSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(parseInt(e.currentTarget.value));
  }

  const problemInfoGenerate = generator();

  const [problemInfo, setProblemInfo] = useState(problemInfoGenerate);
  const [onSolution, setOnSolution] = useState(false);
  const [selected, setSelected] = useState(-1);
  localStorage.setItem("lang", problemInfo.lang);
  localStorage.setItem("id", problemInfo.id.toString());

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Programming Quiz | Play</title>
      </Helmet>

      <Menu playSelected />

      <article className={styles.problemContainer}>
        <div className={[styles.problem, "problem-container"].join(" ")}>
          <h1 className={styles.typeText}>
            {onSolution ? "SOLUTION" : "PROBLEM"}
          </h1>

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
            SUBMIT
          </Button>
          <Button title="submit">GIVE UP</Button>
        </div>
      </article>
    </main>
  );
}
