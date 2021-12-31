import React from "react";
import { Helmet } from "react-helmet";

import { PieChart } from "react-minimal-pie-chart";

import Menu from "@/components/Menu";

import styles from "@/styles/Stats.module.scss";

export default function Stats() {
  let hasProblems: boolean, problemsRight: number, problemsWrong: number;
  if (
    localStorage.getItem("problemsRight") ||
    localStorage.getItem("problemsWrong")
  ) {
    hasProblems = true;
    problemsRight = parseInt(localStorage.getItem("problemsRight")!);
    problemsWrong = parseInt(localStorage.getItem("problemsWrong")!);
  } else {
    hasProblems = false;
  }

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Programming Quiz | Stats</title>
      </Helmet>

      <Menu statsSelected />

      <div className={styles.colorsHelperContainer}>
        <div className={styles.colorHelper}>
          <span className={styles.greenSquare}></span> Answered correctly
        </div>
        <div className={styles.colorHelper}>
          <span className={styles.redSquare}></span> Answered incorrectly
        </div>
      </div>

      <div className={styles.chartContainer}>
        {hasProblems ? (
          <PieChart
            data={[
              {
                title: "Correct on your first attempt",
                value: problemsRight!,
                color: "var(--color-green)"
              },
              {
                title: "Incorrect",
                value: problemsWrong!,
                color: "var(--color-red)"
              }
            ]}
            className={styles.chart}
          />
        ) : (
          "We don't have data yet."
        )}
      </div>
    </main>
  );
}
