// @ts-nocheck
import makeStore from "./makeStore";
import { reducer, initialState } from "./reducer";

const [useStore, useDispatch, StoreProvider] = makeStore(reducer, initialState);
export { useStore, useDispatch, initialState, StoreProvider };
