import Menu from "@/components/Menu";
import Problem from "@/components/Play/Problem";
import Submit from "@/components/Play/Submit";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";

import styles from "@/styles/Play.module.scss";

import { useState } from "react";

export default function Play() {
  function submit() {
    // submit button handler
    const problem = localStorage.getItem("problem");
    const options = localStorage.getItem("options");
    const answer = parseInt(localStorage.getItem("answer"));
    const solution = localStorage.getItem("solution");

    // console.log(problem, options, answer, solution);
    // determine which checkbox was checked
    const checkboxes = document.querySelectorAll("input[name='option']");

    let nthCheckbox = 1;
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        break;
      }
      nthCheckbox++;
    }

    if (nthCheckbox === answer) {
      // correct
      console.log("correct");
    } else {
      // incorrect
      console.log("incorrect");
    }

    // document.querySelectorAll(".problem-container > p")[0].innerHTML = solution;
    setProblemInfo([solution, options]);
  }

  const problemInfoGenerate = generator();
  const problem = problemInfoGenerate.problem;
  const options = problemInfoGenerate.options;
  const answer = problemInfoGenerate.answer;
  const solution = problemInfoGenerate.solution;

  const [problemInfo, setProblemInfo] = useState([
    problem,
    Array.from(options)
  ]);

  localStorage.setItem("problem", problem);
  localStorage.setItem("options", options);
  localStorage.setItem("answer", answer);
  localStorage.setItem("solution", solution);

  return (
    <main className={styles.main}>
      <Menu playSelected />

      <article className={styles.problemContainer}>
        <Problem problemInfo={problemInfo} />

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
