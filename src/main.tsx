import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "/sw.js";

import { isJSON, defaultSettings } from "@/lib/site";

// styles for the entire web page
import "@/styles//globals.scss";
import "@/styles/theme.scss";
import "@/styles/markup.scss";

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
  isJSON(localStorage.getItem("settings")) && localStorage.getItem("settings")
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

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/sw.js");
// }

// serviceWorker.register();

// import React from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#app");

// function App() {
//   let subtitle;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("app"));
