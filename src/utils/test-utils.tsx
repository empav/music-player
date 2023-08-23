//@ts-nocheck
import { render } from "@testing-library/react";
import { reducer, initialState } from "../context/reducer";

import AppContext from "../context";
import { useReducer } from "react";

export default function renderWithProviders(ui) {
  const Wrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };

  // Return an object with the store and all of RTL's query functions
  return { ...render(ui, { wrapper: Wrapper }) };
}
