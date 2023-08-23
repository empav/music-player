import React from "react";

const AppContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: { songs: [] },
  dispatch: () => null,
});

export default AppContext;
