import { createStore, applyMiddleware } from "redux";
import { MainReducer } from "./MainReducer";

// export const initialState = {
//   name: "",
//   username: "",
//   city: "",
//   country: "",
//   description: "",
//   image: "",
// };

export const store = createStore(MainReducer, applyMiddleware());
