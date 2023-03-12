import React from "react";
import "./css/app.css";
import { DiAndroid } from "react-icons/di";

const App = () => {
  return (
    <div className="h-screen w-screen flex  justify-center items-center space-x-5">
      <div className="card">
        <div className="logo_row">
          <DiAndroid className="element" size={90} />
          <DiAndroid className="element_center" size={90} />
          <DiAndroid className="element" size={90} />
        </div>
        <div className="logo_row">
          <DiAndroid className="element" size={90} />
          <DiAndroid className="element_center" size={90} />
          <DiAndroid className="element" size={90} />
        </div>
        <div className="logo_row">
          <DiAndroid className="element" size={90} />
          <DiAndroid className="element_center" size={90} />
          <DiAndroid className="element" size={90} />
        </div>
      </div>
    </div>
  );
};

export default App;
