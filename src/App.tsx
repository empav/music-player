import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.mpApp}>
      <aside className={styles.mpAside}>
        <header className={styles.mpAsideHeader}>
          <img src={logo} className={styles.mpLogo} alt="logo music player" />
          <h1>Library</h1>
        </header>
        <ul className={styles.mpAsideList}>
          <li>asdasasd</li>
          <li>asdasasdasda</li>
          <li>asdasasd</li>
          <li>asdasasd</li>
          <li>asdasdasd</li>
        </ul>
      </aside>
      <main className={styles.mpMain}>ciao</main>
    </div>
  );
}

export default App;
