import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Aside from "./components/Aside";
import Main from "./components/Main";

import { useDispatch } from "./store";
import Spinner from "./components/Spinner";

const TIMEOUT_LOADING = 3000;

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "LOAD_SONGS" });
      setLoading(false);
    }, TIMEOUT_LOADING);
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.mpApp}>
      <Aside />
      <Main />
    </div>
  );
}
