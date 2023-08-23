// @ts-nocheck
import { render } from "@testing-library/react";
import makeStore from "../store/makeStore";

import { reducer, initialState } from "../store/reducer";
import { StoreProvider } from "../store";

export default function renderWithProviders(
  ui,
  {
    preloadedState = { ...initialState },
    // Automatically create a store instance if no store was passed in
    store = makeStore({ reducer, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <StoreProvider>{children}</StoreProvider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
