//@ts-nocheck
import { useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";
import AppContext from "./context";
import Spinner from "./components/Spinner";
import { reducer, initialState } from "./context/reducer";

const TIMEOUT_LOADING = 3000;

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "LOAD_SONGS" });
      setLoading(false);
    }, TIMEOUT_LOADING);
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className={styles.mpApp}>
        <Aside />
        <Main />
      </div>
    </AppContext.Provider>
  );
}
