import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppContextProvider from "./context/AppContext.tsx";
import Ellipse1 from "./assets/ellipse1.svg";
import Ellipse2 from "./assets/ellipse_2.svg";
import Ellipse3 from "./assets/ellipse_3.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <img src={Ellipse1} className="ellipse ellipse_1a" />
      <img src={Ellipse1} className="ellipse ellipse_1b" />
      <img src={Ellipse1} className="ellipse ellipse_1c" />
      <img src={Ellipse2} className="ellipse ellipse_2a" />
      <img src={Ellipse2} className="ellipse ellipse_2b" />
      <img src={Ellipse3} className="ellipse ellipse_3a" />
      <img src={Ellipse3} className="ellipse ellipse_3b" />
      <img src={Ellipse3} className="ellipse ellipse_3c" />
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
