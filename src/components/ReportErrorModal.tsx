import Modal from "react-modal";
import { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/components/Modal.module.scss";
import Button from "@/components/Button";
import { modalStyles } from "@/lib/styles";

const ReportErrorModal: FC<{
  problemInfo: PopulatedProblem;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => any;
}> = ({ problemInfo, isOpen, setIsOpen }) => {
  Modal.setAppElement("#app");

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      style={modalStyles}
      contentLabel="Report Error"
    >
      <div className="top">
        <button onClick={closeModal} className={styles.close}>
          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
        </button>
      </div>

      <div className={styles.info}>
        <h2 className={styles.emailReq}>
          Please email the following to{" "}
          <span className="bold">programming.quiz.2022@gmail.com</span>:
        </h2>
        <div>
          <span className="bold">Error: </span>
          <br />
          &lt;insert error/bug here&gt;
        </div>
        <br />
        <span className="bold">Problem:</span> {problemInfo.lang}-
        {problemInfo.id}
      </div>

      <div className={styles.bottomButtons}>
        <Button onClick={closeModal}>OK</Button>
      </div>
    </Modal>
  );
};

export default ReportErrorModal;
