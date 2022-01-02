import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

export default function Play() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0.8rem",
      transition: "0.3s ease"
    }
  };

  Modal.setAppElement("#app");

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  function submit() {
    if (onSolution) {
      setOnSolution(false);
      setSelected(-1);
      setTypeText("Problem");
      setProblemInfo(generator(problemInfo));
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

  function reportError() {
    // if (window.confirm("Open email in new tab?")) {
    //   const recipient = "Programming-Quiz@outlook.com";
    //   const subject = "Bug in Problem";
    //   const body = encodeURIComponent(
    //     `Bug:
    // <explain here>
    // Problem: ${problemInfo.problem}
    // Options: ${problemInfo.options.toString()}`
    //   );
    //   window
    //     .open(`mailto:${recipient}?subject=${subject}&body=${body}`, "_blank")!
    //     .focus();
    // }

    console.log("d");
    openModal();
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
  }, [problemInfo]);

  const [onSolution, setOnSolution] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [typeText, setTypeText] = useState("Problem");

  localStorage.setItem("lang", problemInfo.lang!);
  localStorage.setItem("id", problemInfo.id.toString());

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

        <div className={styles.controls}>
          <Button className={styles.submit} title="submit" onClick={submit}>
            {onSolution ? "NEXT" : "SUBMIT"}
          </Button>

          <Button title="submit" onClick={reportError}>
            REPORT ERROR
          </Button>
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="top">
            <button onClick={closeModal} className="close-modal">
              <FontAwesomeIcon icon={faTimes} className="close-modal-icon" />
            </button>
          </div>
          <div>
            <h2 className="model-request">
              Please email to
              <span className="bold"> Programming-Quiz.outlook.com</span>
            </h2>

            <div className="info">
              <span className="bold">Problem:</span> {problemInfo.problem}
              <div className="optionsInModel">
                <span className="bold">Options: </span>{" "}
                {problemInfo.options.toString()}
              </div>
            </div>
          </div>
        </Modal>
      </main>
    </>
  );
}

// if (window.confirm("Open email in new tab?")) {
//   const recipient = "Programming-Quiz@outlook.com";
//   const subject = "Bug in Problem";
//   const body = encodeURIComponent(
//     `Bug:
// <explain here>
// Problem: ${problemInfo.problem}
// Options: ${problemInfo.options.toString()}`
//   );
//   window
//     .open(`mailto:${recipient}?subject=${subject}&body=${body}`, "_blank")!
//     .focus();
// }
