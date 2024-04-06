import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Light from "../public/svg/assets/bg-light.png";
import Dark from "../public/svg/assets/bg-dark.png";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

rootElement.style.backgroundImage = Light;

// Set Darkmode here

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);