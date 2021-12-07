import { Routes, Route, Link } from "react-router-dom";

import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Play from "@/pages/Play";
import Settings from "@/pages/Settings";
import Stats from "@/pages/Stats";
import NotFound from "@/pages/404";

// import no dark mode stylesheet, if user choose so
if (localStorage.getItem("dark-mode") === "false") {
  import("@/styles/global-styles/no-dark.scss").then();
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
