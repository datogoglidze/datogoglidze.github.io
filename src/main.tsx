import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
