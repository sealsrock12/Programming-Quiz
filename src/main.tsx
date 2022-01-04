import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "/sw.js";

import { isJSON, defaultSettings } from "@/lib/site";

// styles for the entire web page
import "@/styles/index.scss";

const Home = lazy(() => import("@/pages/Home"));
const Play = lazy(() => import("@/pages/Play"));
const Settings = lazy(() => import("@/pages/Settings"));
const Stats = lazy(() => import("@/pages/Stats"));
const Credits = lazy(() => import("@/pages/Credits"));
const NotFound = lazy(() => import("@/pages/404"));

import Footer from "@/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const renderLoader = () => <p></p>;

// Apply settings
const currentSettings =
  isJSON(localStorage.getItem("settings")!) && localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings")!)
    : defaultSettings;

if (currentSettings.lightMode) {
  document.body.classList.add("light");
}

ReactDOM.render(
  <Suspense fallback={renderLoader()}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  </Suspense>,
  document.getElementById("app")
);
