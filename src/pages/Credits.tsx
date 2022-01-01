import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";

import styles from "@/styles/Credits.module.scss";

export default function Credits() {
  return (
    <>
      <Helmet>
        <title>Credits | Programming Quiz</title>
      </Helmet>
      <Menu />
      <main className={styles.main}>
        <h1>Credits</h1>
        <p>Thank you to these people for making this app possible.</p>
        <ul>
          <li>CubingSoda/forester2015 - Developer</li>
          <li>SealsRock12/sealsrock - Developer</li>
          <li>Other problem writers who asked to remain anonymous</li>
        </ul>
      </main>
    </>
  );
}
