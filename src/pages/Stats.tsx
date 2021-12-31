import React from "react";
import { Helmet } from "react-helmet";

import { isJSON } from "@/lib/site";

import { PieChart } from "react-minimal-pie-chart";

import Menu from "@/components/Menu";

import styles from "@/styles/Stats.module.scss";

function getData() {
  const data = isJSON(localStorage.getItem("data")!)
    ? JSON.parse(localStorage.getItem("data")!)
    : undefined;

  if (!data) {
    localStorage.setItem("data", "{}");
    return false;
  }

  let correct = 0;
  let incorrect = 0;

  for (const dataItem in data) {
    if (data[dataItem].response === "1") {
      correct++;
    } else {
      incorrect++;
    }
  }

  console.log(`Correct: ${correct}\nIncorrect: ${incorrect}`);

  return {
    correct: correct,
    incorrect: incorrect
  };
}

export default function Stats() {
  const data = getData();

  return (
    <main className={styles.main}>
      <Helmet>
        <title>Programming Quiz | Stats</title>
      </Helmet>

      <Menu statsSelected />

      <div className={styles.colorsHelperContainer}>
        <div className={styles.colorHelper}>
          <span className={styles.blueSquare}></span> Answered correctly on your
          first attempt
        </div>
        <div className={styles.colorHelper}>
          <span className={styles.orangeSquare}></span> Gave up after one or
          more attempt
        </div>
      </div>

      <div className={styles.chartContainer}>
        {data ? (
          <PieChart
            data={[
              {
                title: "Correct on your first attempt",
                value: data.correct,
                color: "var(--color-blue)"
              },
              {
                title: "Incorrect",
                value: data.incorrect,
                color: "var(--color-orange)"
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
