import styles from "@/styles/Play.module.scss";

import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";

function Problem({ problemInfo }) {
  return (
    <>
      <div className={[styles.problem, "problem-container"].join(" ")}>
        {!problemInfo.atProblem ? (
          <h1 className={styles.solutionText}>SOLUTION</h1>
        ) : null}

        <ReactMarkdown>{problemInfo.pageText}</ReactMarkdown>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.options}>
          {problemInfo.options.map((option, index) => {
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
