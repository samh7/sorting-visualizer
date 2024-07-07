import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AlgoContext from "./components/utils/AlgoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlgoContext>
      <App />
    </AlgoContext>
  </React.StrictMode>
);
