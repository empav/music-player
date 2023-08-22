import { useCallback } from "react";
import { useDispatch, useStore } from "../../store";
import styles from "./Song.module.css";
import clsx from "clsx";

const Song = (props: Song) => {
  const { cover, artist, id, name } = props;
  const { selected } = useStore();
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: "SELECT_SONG", payload: { ...props } });
  }, [dispatch, props]);

  return (
    <li
      className={clsx(
        styles.mpSong,
        selected?.id === id && styles.mpSongSelected
      )}
      onClick={handleClick}
    >
      <img src={cover} className={styles.mpCover} alt={id} />
      <div>
        <h3 className={styles.mpName}>{name}</h3>
        <p className={styles.mpArtist}>{artist}</p>
      </div>
    </li>
  );
};

export default Song;
