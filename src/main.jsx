import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
