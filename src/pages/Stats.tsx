import { Helmet } from "react-helmet";
import { PieChart } from "react-minimal-pie-chart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import Menu from "@/components/Menu";
import styles from "@/styles/Stats.module.scss";

function reset() {
  // handler for resetting settings to default
  if (window.confirm("Are you sure you want to reset all stats?")) {
    localStorage.removeItem("problemsRight");
    localStorage.removeItem("problemsWrong");
    window.location.reload();
  }
}

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
    <>
      <Helmet>
        <title>Stats | Programming Quiz</title>
      </Helmet>

      <Menu statsSelected />
      <main className={styles.main}>
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

        <section className={styles.reset} onClick={reset}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={styles.faTriangleExclamation}
          />
          Reset all stats
        </section>

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
    </>
  );
}
