import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new RebootClient("https://dev.localhost.direct:9991");

root.render(
  <React.StrictMode>
    <RebootClientProvider client={client}>
      <App />
    </RebootClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
