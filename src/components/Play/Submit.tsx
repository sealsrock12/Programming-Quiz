import styles from "@/styles/Play.module.scss";
import Button from "@/components/Button";

function submit() {
  // submit button handler
  const problem = localStorage.getItem("problem");
  const options = localStorage.getItem("options");
  const answer = parseInt(localStorage.getItem("answer"));
  const solution = localStorage.getItem("solution");

  // console.log(problem, options, answer, solution);
  // determine which checkbox was checked
  const checkboxes = document.querySelectorAll("input[name='option']");

  let nthCheckbox = 1;
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      break;
    }
    nthCheckbox++;
  }

  if (nthCheckbox === answer) {
    // correct
    console.log("correct");
  } else {
    // incorrect
    console.log("incorrect");
  }

  document.querySelectorAll(".problem-container > p")[0].innerHTML = solution;
}

export default function Submit() {
  return (
    <div className={styles.controls}>
      <Button className={styles.submit} title="submit" onClick={submit}>
        SUBMIT
      </Button>
      <Button title="submit">GIVE UP</Button>
    </div>
  );
}
