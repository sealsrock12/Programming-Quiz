import Modal from "react-modal";
import { useContext, useState } from "react";
import Button from "@/components/Button";
import { AppContext } from "./AppProvider";
import styles from "@/styles/components/Modal.module.scss";
import { modalStyles } from "@/lib/styles";

const AdsModal = () => {
  const { ads, setAds } = useContext(AppContext);
  const [open, setOpen] = useState(ads === null);

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
      style={modalStyles}
      contentLabel="Display Ads?"
    >
      <div className={styles.info}>
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
