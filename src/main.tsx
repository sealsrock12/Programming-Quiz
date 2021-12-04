import { render } from "preact";
import App from "@/app";

// styles for the entire web page
import "@/styles/global-styles/globals.scss";
import "@/styles/global-styles/theme.scss";
import "@/styles/global-styles/markup.scss";

import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")!
);
