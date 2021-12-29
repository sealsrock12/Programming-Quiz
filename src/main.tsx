import React from "react";
import ReactDOM from "react-dom";

// import App from "@/app";

// styles for the entire web page
import "@/styles/global-styles/globals.scss";
import "@/styles/global-styles/theme.scss";
import "@/styles/global-styles/markup.scss";

import Home from "@/pages/Home";
import Play from "@/pages/Play";
import Settings from "@/pages/Settings";
import Stats from "@/pages/Stats";
import NotFound from "@/pages/404";

import Footer from "@/components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </Router>,
  document.getElementById("app")
);
