import React from "react";
import logo from "../../images/logo.svg";
import styles from "./Aside.module.css";
import Song from "./Song";
import AppContext from "../../context";

export default function Aside() {
  const {
    state: { songs },
  } = React.useContext(AppContext);
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
