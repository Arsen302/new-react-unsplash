import React from "react";
import { MainPage } from "./MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

import "./App.css";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
};
