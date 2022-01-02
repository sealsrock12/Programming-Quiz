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
        <p className={styles.thanks}>
          Thank you to these people for making this app possible.
        </p>
        <ul>
          <li>
            <a href="https://github.com/CubingSoda">CubingSoda</a>/
            <a href="https://artofproblemsolving.com/community/user/forester2015">
              forester2015
            </a>{" "}
            - Developer
          </li>
          <li>
            <a href="https://github.com/SealsRock12">SealsRock12</a>/
            <a href="https://artofproblemsolving.com/community/user/sealsrock">
              sealsrock
            </a>{" "}
            - Developer
          </li>
          <li>
            <a href="https://artofproblemsolving.com/community/user/OlympusHero">
              OlympusHero
            </a>
            - Problem writer
          </li>
          <li>
            <a href="https://artofproblemsolving.com/community/user/AndrewC10">
              AndrewC10
            </a>{" "}
            - Problem writer
          </li>
          <li>
            <a href="https://artofproblemsolving.com/community/user/happycupcake">
              happycupcake
            </a>{" "}
            - Problem writer
          </li>
          <li>
            <a href="https://artofproblemsolving.com/community/user/imgroot2">
              imgroot2
            </a>{" "}
            - Problem writer
          </li>
          <li>Other problem writers who asked to remain anonymous</li>
        </ul>
      </main>
    </>
  );
}
