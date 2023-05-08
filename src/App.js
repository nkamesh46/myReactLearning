import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

rootElement.render(<App />);
