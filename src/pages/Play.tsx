import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";

import styles from "@/styles/Play.module.scss";

import ReactMarkdown from "react-markdown";
import { v4 as uuidv4 } from "uuid";
import problems from "@/lib/problems";

export default function Play() {
  function submit() {
    if (onSolution) {
      setOnSolution(false);
      setSelected(-1);
      setTypeText("PROBLEM");
      setProblemInfo(generator());
      return;
    }
    if (selected === -1) {
      return;
    }

    setOnSolution(true);

    if (selected === problemInfo.answer) {
      setTypeText("Correct!");
    } else {
      setTypeText("Sorry, incorrect.");
    }

    const data = JSON.parse(localStorage.getItem("data"));
    data[`${problemInfo.lang}-${problemInfo.id}`] = {
      response: selected === problemInfo.answer ? "1" : "0"
    };
    localStorage.setItem("data", JSON.stringify(data));

    console.log(problemInfo.solution);
    console.log(problemInfo.options);
  }

  function onOptionSelect(e) {
    setSelected(parseInt(e.currentTarget.value));
  }

  const [problemInfo, setProblemInfo] = useState(() => {
    if (localStorage.getItem("lang") && localStorage.getItem("id")) {
      console.log("Updating based on storage");
      const lang = localStorage.getItem("lang");
      const id = parseInt(localStorage.getItem("id"));

      return { lang, id, ...problems[lang][id] };
    } else {
      return generator();
    }
  });
  useEffect(() => {
    localStorage.setItem("lang", problemInfo.lang);
    localStorage.setItem("id", problemInfo.id.toString());
  }, [problemInfo]);

  const [onSolution, setOnSolution] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [typeText, setTypeText] = useState("PROBLEM");

  localStorage.setItem("lang", problemInfo.lang);
  localStorage.setItem("id", problemInfo.id.toString());

  localStorage.setItem(
    "data",
    localStorage.getItem("data") ? localStorage.getItem("data") : "{}"
  );

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Play | Programming Quiz</title>
      </Helmet>

      <Menu playSelected />

      <article className={styles.problemContainer}>
        <div className={`${styles.problem} problem-container`}>
          <h1 className={styles.typeText}>{typeText}</h1>

          <ReactMarkdown>
            {onSolution ? problemInfo.solution : problemInfo.problem}
          </ReactMarkdown>
        </div>
        <div
          className={`${styles.optionsContainer} ${onSolution ? "HIDDEN" : ""}`}
        >
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
                  <label
                    htmlFor={`option-${index}`}
                    className={styles.optionLabel}
                  >
                    {option}
                  </label>
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
