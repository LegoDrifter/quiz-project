import { useState } from "react";

import logo from "../src/assets/logo.png";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-slate-500 to-yellow-100">
      <div className="flex justify-center pt-20 ">
        <img src={logo} alt="Logo" className="h-16 w-16" />
        <h1 className="text-5xl pl-3 pt-2 text-custom-green uppercase">
          Artificial Intelligence
        </h1>
      </div>
      <Quiz />
    </div>
  );
}

export default App;
