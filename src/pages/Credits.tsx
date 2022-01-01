import { Helmet } from "react-helmet";

import Menu from "@/components/Menu";

import styles from "@/styles/Credits.scss";

export default function Credits() {
  return (
    <main>
      <Helmet>
        <title>Programming Quiz | Credits</title>
      </Helmet>
      <Menu />
      <h1>Credits</h1>
      <div>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    </main>
  );
}
