import logo from "../logo.svg";
import styles from "./Aside.module.css";

type AsideProps = {
  songs: Song[];
};

export default function Aside({ songs }: AsideProps) {
  return (
    <aside className={styles.mpAside}>
      <header className={styles.mpAsideHeader}>
        <img src={logo} className={styles.mpLogo} alt="logo music player" />
        <h1>Library</h1>
      </header>
      <ul className={styles.mpAsideList}>
        {songs.map((song) => (
          <li>{song.artist}</li>
        ))}
      </ul>
    </aside>
  );
}
