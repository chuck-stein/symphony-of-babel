import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
