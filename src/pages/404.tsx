import React from "react";
import { Helmet } from "react-helmet";

import styles from "@/styles/global-styles/404.module.scss";

import Menu from "@/components/Menu";

export default function Custom404() {
  return (
    <main className={styles.main}>
      <Helmet>
        <title>Programming Quiz | 404</title>
      </Helmet>

      <section className={styles.content}>
        <span className={styles.pageNot}>Page Not </span>
        <span className={styles.found}>Found</span>
        <h2 className={styles.description}>
          Sorry, we cannot find the page you are looking for.
        </h2>
      </section>
    </main>
  );
}
