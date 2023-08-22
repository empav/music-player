import logo from "../images/logo.svg";
import { useStore } from "../store";
import styles from "./Aside.module.css";

export default function Aside() {
  const { songs } = useStore();
  return (
    <aside className={styles.mpAside}>
      <header className={styles.mpAsideHeader}>
        <img src={logo} className={styles.mpLogo} alt="logo music player" />
        <h1>Library</h1>
      </header>
      <ul className={styles.mpAsideList}>
        {songs.map((song: Song) => (
          <li>{song.artist}</li>
        ))}
      </ul>
    </aside>
  );
}
