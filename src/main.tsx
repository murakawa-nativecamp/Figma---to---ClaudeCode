import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Gallery } from "./Gallery";
import { Home } from "./screens/Home";

const screen = new URLSearchParams(window.location.search).get("screen");

createRoot(document.getElementById("root")!).render(
  <StrictMode>{screen === "home" ? <Home /> : <Gallery />}</StrictMode>,
);
