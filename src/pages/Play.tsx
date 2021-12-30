import { useState } from "react";
import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";
import Problem from "@/components/Play/Problem";
import Button from "@/components/Button";
import { generator } from "@/lib/generator";

import styles from "@/styles/Play.module.scss";

export default function Play() {
  function submit() {
    // submit button handler
    const problemInfo = JSON.parse(
      localStorage.getItem("problem-info") || "{}"
    );
    const problem = problemInfo.problem;
    const options = problemInfo.options;
    const answer = problemInfo.answer;
    const solution = problemInfo.solution;
    const atProblem = problemInfo.atProblem;

    const nthCheckbox = document
      .querySelectorAll("input[name='option']:checked")[0]
      .id.slice(7);

    if (nthCheckbox === answer) {
      // correct
      console.log("correct");
    } else {
      // incorrect
      console.log("incorrect");
    }

    console.log(solution);
    console.log(options);

    problemInfo.pageText = solution;
    problemInfo.atProblem = false;
    console.log(problemInfo.pageText);

    setProblemInfo(problemInfo);
  }

  const problemInfoGenerate = generator();

  const [problemInfo, setProblemInfo] = useState(problemInfoGenerate);
  localStorage.setItem("problem-info", JSON.stringify(problemInfoGenerate));

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Programming Quiz | Play</title>
      </Helmet>

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
