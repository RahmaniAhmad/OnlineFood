import { render } from "react-dom";
import { store } from "./store";
import App from "./App";
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.css";
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
