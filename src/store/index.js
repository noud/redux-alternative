//import { createStore } from "redux";
import { createStore } from "../ReduxAlternative";
import reducer from "../reducers";

const initialState = { tech: "React" };
export const store = createStore(reducer, initialState);