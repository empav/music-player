import { useEffect, useReducer } from "react";
import styles from "./App.module.css";
import Aside from "./components/Aside";
import Main from "./components/Main";

import { reducer, initialState } from "./reducer";

export default function App() {
  const [{ songs }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "INIT" });
  }, []);
  
  return (
    <div className={styles.mpApp}>
      <Aside songs={songs} />
      <Main />
    </div>
  );
}
