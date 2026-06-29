import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Gallery } from "./Gallery";
import { RegistrationFlow } from "./screens/registration/RegistrationFlow";

const screen = new URLSearchParams(window.location.search).get("screen");

createRoot(document.getElementById("root")!).render(
  <StrictMode>{screen === "registration" ? <RegistrationFlow /> : <Gallery />}</StrictMode>,
);
