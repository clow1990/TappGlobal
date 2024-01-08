import "./index.css";

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="784744564909-4jf5sqj7tlhi5m3h87jmj8s69539t46j.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
