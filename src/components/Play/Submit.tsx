import styles from "@/styles/Play.module.scss";
import Button from "@/components/Button";

function submit() {
  console.log(localStorage.getItem("problem"));
}

export default function Submit() {
  return (
    <div className={styles.controls}>
      <Button className={styles.submit} onClick={submit}>
        SUBMIT
      </Button>
      <Button>GIVE UP</Button>
    </div>
  );
}
