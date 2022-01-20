import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

// styles for the entire web page
import "@/styles/index.scss";

const Home = lazy(() => import("@/pages/Home"));
const Play = lazy(() => import("@/pages/Play"));
const Settings = lazy(() => import("@/pages/Settings"));
const Stats = lazy(() => import("@/pages/Stats"));
const Credits = lazy(() => import("@/pages/Credits"));
const NotFound = lazy(() => import("@/pages/404"));
// const AdsModal = lazy(() => import("@/components/AdsModal"));

import Footer from "@/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppProvider from "./components/AppProvider";

const renderLoader = () => <p></p>;

ReactDOM.render(
  <AppProvider>
    <Suspense fallback={renderLoader()}>
      <Router>
        {/* <AdsModal /> */}
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
    </Suspense>
  </AppProvider>,
  document.getElementById("app")
);
