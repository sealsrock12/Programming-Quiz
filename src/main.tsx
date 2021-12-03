import { render } from "preact";
import { App } from "./app";
import "@scss/404.module.scss";

render(<App />, document.getElementById("app")!);
