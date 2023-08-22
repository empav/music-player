import { useEffect, useReducer } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";

import { reducer, initialState } from "./reducer";

function App() {
  const [{ songs }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "INIT" });
  }, []);

  return (
    <div className={styles.mpApp}>
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
      <main className={styles.mpMain}>ciao</main>
    </div>
  );
}

export default App;
