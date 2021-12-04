import { PieChart } from "react-minimal-pie-chart";

import Meta from "@/components/Meta";
import Menu from "@/components/Menu";

import styles from "@/styles/Stats.module.scss";

export default function Stats() {
  return (
    <main className={styles.main}>
      <Meta page="Stats" />
      <Menu statsSelected />

      <div className={styles.colorsHelperContainer}>
        <div className={styles.colorHelper}>
          <span className={styles.blueSquare}></span> Answered correctly on your
          first attempt
        </div>
        <div className={styles.colorHelper}>
          <span className={styles.greenSquare}></span> Answered correctly after
          your first attempt
        </div>
        <div className={styles.colorHelper}>
          <span className={styles.orangeSquare}></span> Gave up after one or
          more attempt
        </div>
        <div className={styles.colorHelper}>
          <span className={styles.redSquare}></span> Gave up without attempting
        </div>
      </div>

      <div className={styles.chartContainer}>
        <PieChart
          data={[
            {
              title: "Correct on first attempt",
              value: 198,
              color: "var(--color-blue)"
            },
            {
              title: "Correct on second attempt",
              value: 150,
              color: "var(--color-green)"
            },
            { title: "Incorrect", value: 50, color: "var(--color-orange)" },
            { title: "Gave up", value: 30, color: "var(--color-red)" }
          ]}
          className={styles.chart}
        />
      </div>
    </main>
  );
}
