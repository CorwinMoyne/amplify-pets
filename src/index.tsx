import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from 'aws-amplify/api';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import config from './amplifyconfiguration.json';
import "./index.css";
import reportWebVitals from "./reportWebVitals";

Amplify.configure(config);

export const client = generateClient();


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
