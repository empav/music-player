import React from "react";
import styles from "./Main.module.css";
import Player from "./player/Player";
import AppContext from "../../context";

export default function Main() {
  const {
    state: { selected },
  } = React.useContext(AppContext);

  return (
    <main className={styles.mpMain}>
      <div className={styles.mpCover}>
        <img
          src={selected?.cover}
          className={styles.mpCoverImg}
          alt={selected?.id}
        />
        <h1 data-testid={selected?.name} className={styles.mpName}>{selected?.name}</h1>
        <p data-testid={selected?.artist} className={styles.mpArtist}>{selected?.artist}</p>
      </div>
      <Player />
    </main>
  );
}
