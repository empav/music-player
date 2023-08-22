import { useEffect } from "react";
import styles from "./App.module.css";
import Aside from "./components/Aside";
import Main from "./components/Main";

import { useDispatch } from "./store";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_SONGS" });
  }, [dispatch]);

  return (
    <div className={styles.mpApp}>
      <Aside />
      <Main />
    </div>
  );
}
