import type Modal from "react-modal";

export const modalStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.8rem",
    transition: "0.3s ease",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    maxWidth: "min(100vw, 70ch)",
    padding: "0",
    borderColor: "var(--border)"
  }
};