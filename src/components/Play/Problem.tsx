import styles from "@/styles/Play.module.scss";

import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";
import { generator } from "@/lib/generator";

function Problem() {
  const problemInfo = generator();
  const problem = problemInfo.problem;
  const options = problemInfo.options;
  const solution = problemInfo.solution;

  localStorage.setItem("problem", problem);

  return (
    <>
      <div className={styles.problem}>
        <ReactMarkdown>{problem}</ReactMarkdown>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.options}>
          {options.map((option, index) => {
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

        {/* <div className={styles.solution}>
          <ReactMarkdown>{solution}</ReactMarkdown>
        </div> */}
      </div>
    </>
  );
}

export default Problem;