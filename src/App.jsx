import { useState } from "react";
import Header from "./Header/Header.jsx";
import Card1 from "./Card1/Card1.jsx";
import BarTitle from "./FirstThingsFirst/FirstThingsFirst.jsx";
import Card2 from "./Card1/Card2/Card2.jsx";
import Card3 from "./Card3/Card3.jsx";
import Card4 from "./Card4/Card4.jsx";
import Card5 from "./Card5/Card5.jsx";
import Card6 from "./Card6/Card6.jsx";
import Card7 from "./Card7/Card7.jsx";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Card1 />
      <img className="laying-down-image" src="/laying-down-small.png" />
      <Card2 />
      <BarTitle />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

export default App;
