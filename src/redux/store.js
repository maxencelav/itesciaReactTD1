import reducer from './reducers'
import { createStore } from "redux";

const initialState = { name: "" };
export const store = createStore(reducer, initialState);