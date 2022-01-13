import Modal from "react-modal";
import { useContext, useState } from "react";
import Button from "@/components/Button";
import { AppContext } from "./AppProvider";
import styles from "@/styles/components/Modal.module.scss";

const AdsModal = () => {
  const { ads, setAds } = useContext(AppContext);
  const [open, setOpen] = useState(ads === null);
  const customStyles: Modal.Styles = {
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

  Modal.setAppElement("#app");

  function closeModal() {
    setOpen(false);
    window.location.reload();
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      style={customStyles}
      contentLabel="Display Ads?"
    >
      <div className={styles.infoWithOptions}>
        <p>
          Hello! If you would like to support us and make better content, we
          would appreciate if you could enable ads on this site. We are
          completely OK without them though.
        </p>
        <br />
        <p>
          Once you decide here, we will not ask you again unless you reset your
          settings. You can change this option at any time in settings.
        </p>
      </div>
      <div className={styles.bottomButtons}>
        <Button
          onClick={() => {
            setAds(false);
            closeModal();
          }}
        >
          No, Thanks.
        </Button>
        <Button
          onClick={() => {
            setAds(true);
            closeModal();
          }}
        >
          Sure!
        </Button>
      </div>
    </Modal>
  );
};

export default AdsModal;
