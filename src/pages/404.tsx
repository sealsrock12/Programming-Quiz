import React from "react";
import { Helmet } from "react-helmet";

import styles from "@/styles/404.module.scss";

import Menu from "@/components/Menu";

export default function Custom404() {
  return (
    <>
      <Helmet>
        <title>404 | Programming Quiz</title>
      </Helmet>
      <Menu />
      <main className={styles.main}>
        <span className={styles.pageNot}>Page Not </span>
        <span className={styles.found}>Found</span>
        <h2 className={styles.description}>
          Sorry, we cannot find the page you are looking for.
        </h2>
      </main>
    </>
  );
}
