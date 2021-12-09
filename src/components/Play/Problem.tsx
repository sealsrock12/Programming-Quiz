import styles from "@/styles/Play.module.scss";

import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";

function Problem({ problemInfoGenerate }) {
  return (
    <>
      <div className={[styles.problem, "problem-container"].join(" ")}>
        <ReactMarkdown>{problemInfoGenerate.pageText}</ReactMarkdown>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.options}>
          {problemInfoGenerate.options.map((option, index) => {
            return (
              <div key={uuidv4()} className={styles.option}>
                <input
                  type="radio"
                  id={`option-${index + 1}`}
                  name={`option`}
                  value={option}
                />
                <label htmlFor={`option-${index + 1}`}> {option}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Problem;
