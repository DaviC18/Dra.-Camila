import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Em produção o HTML vem pré-renderizado (scripts/prerender.mjs): hidrata. No dev, renderiza.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
