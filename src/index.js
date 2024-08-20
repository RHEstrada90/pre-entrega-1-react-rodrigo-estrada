import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
