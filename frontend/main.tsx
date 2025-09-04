import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { AppComp } from "./src/App";
import { AOSInitializer } from "./src/components/Aos";
import "./index.css";

ReactDOM.createRoot(document.querySelector(".root")).render(
  <StrictMode>
    <AOSInitializer />
    <AppComp />
  </StrictMode>
);
