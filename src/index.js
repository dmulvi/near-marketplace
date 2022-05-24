import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { initializeContract } from "./utils/near";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

window.nearInitPromise = initializeContract()
  .then(() => {
    const container = document.getElementById("root");
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App tab="home" />);
  })
  .catch(console.error);
