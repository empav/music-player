import React from "react";

const makeStore = (reducer, initialState = {}) => {
  const storeContext = React.createContext();
  const dispatchContext = React.createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);

    const storeContextValue = React.useMemo(() => store, [store]);
    const dispatchContextValue = React.useMemo(() => dispatch, [dispatch]);

    return (
      <dispatchContext.Provider value={dispatchContextValue}>
        <storeContext.Provider value={storeContextValue}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  const useStore = () => {
    return React.useContext(storeContext);
  };

  const useDispatch = () => {
    return React.useContext(dispatchContext);
  };

  return [useStore, useDispatch, StoreProvider];
};

export default makeStore;

