import { useStore } from "../../store";
import styles from "./Main.module.css";
import Player from "./player/Player";

export default function Main() {
  const { selected } = useStore();

  return (
    <main className={styles.mpMain}>
      <div className={styles.mpCover}>
        <img
          src={selected.cover}
          className={styles.mpCoverImg}
          alt={selected.id}
        />
        <h1 className={styles.mpName}>{selected.name}</h1>
        <p className={styles.mpArtist}>{selected.artist}</p>
      </div>
      <Player />
    </main>
  );
}
