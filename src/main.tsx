import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import { isJSON, defaultSettings } from "@/lib/site";

// styles for the entire web page
import "@/styles/global-styles/globals.scss";
import "@/styles/global-styles/theme.scss";
import "@/styles/global-styles/markup.scss";

const Home = lazy(() => import("@/pages/Home"));
const Play = lazy(() => import("@/pages/Play"));
const Settings = lazy(() => import("@/pages/Settings"));
const Stats = lazy(() => import("@/pages/Stats"));
const NotFound = lazy(() => import("@/pages/404"));

import Footer from "@/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const renderLoader = () => <p></p>;

// Dark/light mode
const currentSettings =
  isJSON(localStorage.getItem("settings")) && localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings")!)
    : defaultSettings;

if (currentSettings.darkMode) {
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
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  </Suspense>,
  document.getElementById("app")
);
