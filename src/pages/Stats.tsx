import { Helmet } from "react-helmet";
import { PieChart } from "react-minimal-pie-chart";

import Menu from "@/components/Menu";
import styles from "@/styles/Stats.module.scss";

export default function Stats() {
  let hasProblems: boolean, problemsRight: number, problemsWrong: number;
  if (localStorage.getItem("problemsRight")) {
    problemsRight = parseInt(localStorage.getItem("problemsRight")!);
  } else problemsRight = 0;
  if (localStorage.getItem("problemsWrong")) {
    problemsWrong = parseInt(localStorage.getItem("problemsWrong")!);
  } else problemsWrong = 0;
  if (problemsRight == 0 && problemsWrong == 0) hasProblems = false;
  else hasProblems = true;

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Programming Quiz | Stats</title>
      </Helmet>

      <Menu statsSelected />

      <div className={styles.colorsHelperContainer}>
        <div className={styles.colorHelper}>
          <span className={styles.greenSquare}></span> Answered correctly:
          <span className="bold">{problemsRight!}</span>
        </div>
        <div className={styles.colorHelper}>
          <span className={styles.redSquare}></span> Answered incorrectly:
          <span className="bold">{problemsWrong!}</span>
        </div>
      </div>

      <div className={styles.chartContainer}>
        {hasProblems ? (
          <PieChart
            data={[
              {
                title: `Correct: ${problemsRight}`,
                value: problemsRight!,
                color: "var(--color-green)"
              },
              {
                title: `Incorrect: ${problemsWrong}`,
                value: problemsWrong!,
                color: "var(--color-red)"
              }
            ]}
            className={styles.chart}
          />
        ) : (
          "Sorry, we don't have any data yet."
        )}
      </div>
    </main>
  );
}
