import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";
import { indexToAlpha, langToNiceName } from "@/lib/problems";

import styles from "@/styles/Play.module.scss";

import ReactMarkdown from "react-markdown";
import "@/lib/prism.js";
import "@/styles/prism.css";
import { v4 as uuidv4 } from "uuid";
import problems from "@/lib/problems";
import ReportErrorModal from "@/components/ReportErrorModal";
import { AppContext } from "@/components/AppProvider";

export default function Play() {
  const { problemType } = useContext(AppContext);

  function submit() {
    if (onSolution) {
      setOnSolution(false);
      setSelected(-1);
      setTypeText("Problem");
      setProblemInfo(generator(problemType, problemInfo));
      localStorage.removeItem("onSolution");
      return;
    }
    if (selected === -1) {
      return;
    }

    setOnSolution(true);
    localStorage.setItem("onSolution", "true");

    if (selected === problemInfo.answer) {
      if (!localStorage.getItem("problemsRight")) {
        localStorage.setItem("problemsRight", "1");
      } else {
        const problemsRight = parseInt(localStorage.getItem("problemsRight")!);
        localStorage.setItem("problemsRight", (problemsRight + 1).toString());
      }
      setTypeText("Correct!");
    } else {
      if (!localStorage.getItem("problemsWrong")) {
        localStorage.setItem("problemsWrong", "1");
      } else {
        const problemsWrong = parseInt(localStorage.getItem("problemsWrong")!);
        localStorage.setItem("problemsWrong", (problemsWrong + 1).toString());
      }
      setTypeText("Sorry, incorrect.");
    }
  }

  function onOptionSelect(e) {
    setSelected(parseInt(e.currentTarget.value));
  }

  const [problemInfo, setProblemInfo] = useState(() => {
    if (localStorage.getItem("lang") && localStorage.getItem("id")) {
      if (localStorage.getItem("onSolution") === "true") {
        localStorage.removeItem("onSolution");
        return generator(problemType);
      }

      console.log("Updating based on storage");
      const lang = localStorage.getItem("lang")!;
      const id = parseInt(localStorage.getItem("id")!);

      if (lang !== problemType) {
        console.log("Lang changed, generating random problem");
        return generator(problemType);
      }

      if (!problems[lang] || !problems[lang][id]) {
        console.log("Invalid stored problem, generating random");
        return generator(problemType);
      }

      return { lang, id, ...problems[lang][id] };
    } else {
      return generator(problemType);
    }
  });
  useEffect(() => {
    localStorage.setItem("lang", problemInfo.lang);
    localStorage.setItem("id", problemInfo.id.toString());
  }, [problemInfo]);

  useEffect(() => {
    // @ts-ignore
    Prism.highlightAll();
  });

  const [onSolution, setOnSolution] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [typeText, setTypeText] = useState("Problem");
  const [errorOpen, setErrorOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Play | Programming Quiz</title>
      </Helmet>

      <Menu playSelected />

      <main className={styles.main}>
        <div className={styles.problem}>
          <h1 className={styles.typeText}>
            {!onSolution
              ? `${typeText} - ${langToNiceName[problemInfo.lang]}`
              : typeText}
          </h1>

          <section>
            <ReactMarkdown>
              {onSolution ? problemInfo.solution : problemInfo.problem}
            </ReactMarkdown>
          </section>
        </div>
        <div
          className={`${styles.optionsContainer} ${
            onSolution ? styles.frozen : ""
          }`}
        >
          {problemInfo.options.map((option, index) => {
            return (
              <div className={styles.optionWrapper} key={uuidv4()}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`option`}
                  value={index}
                  checked={selected === index}
                  onChange={onOptionSelect}
                  className={`${styles.option} ${
                    onSolution &&
                    problemInfo.answer === index &&
                    selected !== index
                      ? styles.correct
                      : ""
                  }`}
                />
                <span className={`${styles.insideLetter}`} aria-hidden="true">
                  {indexToAlpha[index]}
                </span>
                <label
                  htmlFor={`option-${index}`}
                  className={styles.optionLabel}
                >
                  <ReactMarkdown>{option}</ReactMarkdown>
                </label>
              </div>
            );
          })}
        </div>

        <ReportErrorModal
          problemInfo={problemInfo}
          isOpen={errorOpen}
          setIsOpen={setErrorOpen}
        />

        <div className={styles.controls}>
          <Button className={styles.submit} title="submit" onClick={submit}>
            {onSolution ? "NEXT" : "SUBMIT"}
          </Button>

          <Button title="submit" onClick={() => setErrorOpen(true)}>
            REPORT ERROR
          </Button>
        </div>
      </main>
    </>
  );
}
