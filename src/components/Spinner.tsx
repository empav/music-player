import styles from "./Spinner.module.css";
import spinner from "../images/spinner.jpg";

export default function Spinner() {
  return <div className={styles.mpSpinner}>
    <img src={spinner} className={styles.mpSpinnerImg} alt="logo music player" />
  </div>;
}
