import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";
import { indexToAlpha, langToNiceName } from "@/lib/problems";

import styles from "@/styles/Play.module.scss";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { v4 as uuidv4 } from "uuid";
import problems from "@/lib/problems";

export default function Play() {
  function submit() {
    if (onSolution) {
      setOnSolution(false);
      setSelected(-1);
      setTypeText("Problem");
      setProblemInfo(generator());
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

    console.log(problemInfo.solution);
    console.log(problemInfo.options);
  }

  function reportError() {
    if (window.confirm("Open email in new tab?")) {
      // email properties
      let options = "";
      problemInfo.options.forEach(option => {
        options += `\n${option}`;
      });
      const recipient = "Programming-Quiz.outlook.com";
      const subject = "Bug in Problem";
      const body = encodeURIComponent(
        `(Please email this to Programming-Quiz.outlook.com)\n\nBug:\n<explain here>\n\nProblem:\n${problemInfo.problem}\n\nOptions:${options}`
      );

      window
        .open(`mailto:${recipient}?subject=${subject}&body=${body}`, "_blank")!
        .focus();
    }
  }

  function onOptionSelect(e) {
    setSelected(parseInt(e.currentTarget.value));
  }

  const [problemInfo, setProblemInfo] = useState(() => {
    if (localStorage.getItem("lang") && localStorage.getItem("id")) {
      if (localStorage.getItem("onSolution") === "true") {
        localStorage.removeItem("onSolution");
        return generator();
      }

      console.log("Updating based on storage");
      const lang = localStorage.getItem("lang")!;
      const id = parseInt(localStorage.getItem("id")!);

      if (!problems[lang] || !problems[lang][id]) {
        console.log("Invalid stored problem, generating random");
        return generator();
      }

      return { lang, id, ...problems[lang][id] };
    } else {
      return generator();
    }
  });
  useEffect(() => {
    localStorage.setItem("lang", problemInfo.lang);
    localStorage.setItem("id", problemInfo.id.toString());
    setLangNiceName(langToNiceName[problemInfo.lang]);
  }, [problemInfo]);

  const [onSolution, setOnSolution] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [typeText, setTypeText] = useState("Problem");
  const [langNiceName, setLangNiceName] = useState("");

  localStorage.setItem("lang", problemInfo.lang!);
  localStorage.setItem("id", problemInfo.id.toString());

  return (
    <>
      <Helmet>
        <title>Play | Programming Quiz</title>
      </Helmet>

      <Menu playSelected />

      <main className={styles.main}>
        <div className={`${styles.problem} problem-container`}>
          <h1 className={styles.typeText}>
            {typeText} - {langNiceName}
          </h1>

          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  // @ts-ignore - this was copied from https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={darcula}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={`${className} ${styles.code}`} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
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
                    ({indexToAlpha[index]}) {option}
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

          <Button
            className={styles.submit}
            title="submit"
            onClick={reportError}
          >
            REPORT ERROR
          </Button>
        </div>
      </main>
    </>
  );
}
