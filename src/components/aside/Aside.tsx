import logo from "../../images/logo.svg";
import { useStore } from "../../store";
import styles from "./Aside.module.css";
import Song from "./Song";

export default function Aside() {
  const { songs } = useStore();
  return (
    <aside className={styles.mpAside}>
      <header className={styles.mpAsideHeader}>
        <img src={logo} className={styles.mpLogo} alt="logo music player" />
        <h1 className={styles.mpTitle}>Library</h1>
      </header>
      <ul className={styles.mpAsideList}>
        {songs.map((song: Song) => (
          <Song {...song} key={song.id} />
        ))}
      </ul>
    </aside>
  );
}
