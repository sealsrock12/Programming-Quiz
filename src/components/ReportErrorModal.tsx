import Modal from "react-modal";
import { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/Modal.module.scss";

const ReportErrorModal: FC<{
  problemInfo: PopulatedProblem;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => any;
}> = ({ problemInfo, isOpen, setIsOpen }) => {
  const customStyles = {
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
      color: "var(--text-color)"
    }
  };

  Modal.setAppElement("#app");

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Report Error"
    >
      <div className="top">
        <button onClick={closeModal} className={styles.close}>
          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
        </button>
      </div>
      <div>
        <h2 className={styles.request}>
          Please email the following to
          <br />
          <span className="bold"> Programming-Quiz@outlook.com</span>:
        </h2>

        <div className={styles.info}>
          <div>
            <span className="bold">Error: </span>
            <br />
            &lt;type error/bug here&gt;
          </div>
          <br />
          <span className="bold">Problem:</span> {problemInfo.lang},{" "}
          {problemInfo.id}
        </div>
      </div>
    </Modal>
  );
};

export default ReportErrorModal;
