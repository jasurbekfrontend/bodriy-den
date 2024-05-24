import { useState } from "react";
import Main from "./pages/Main";
import Adress from "./pages/Adress";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adress" element={<Adress />} />
      </Routes>
      {/* <Card /> */}
    </div>
  );
}

export default App;
