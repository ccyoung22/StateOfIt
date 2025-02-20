import { useState } from "react";
import Header from "./Header/Header.jsx";
import Card1 from "./Card1/Card1.jsx";
import BarTitle from "./FirstThingsFirst/FirstThingsFirst.jsx";
import Card2 from "./Card1/Card2/Card2.jsx";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Card1 />

      <img className="laying-down-image" src="/laying-down.png" />
      <Card2 />
      <BarTitle />
    </div>
  );
}

export default App;
