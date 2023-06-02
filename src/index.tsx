import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import Store from './store/store';
import { createContext } from "vm";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

/*const s = {
  store: store();
};

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};*/

// const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
