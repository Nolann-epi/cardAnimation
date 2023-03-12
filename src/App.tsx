import React from "react";
import "./css/app.css";
import { DiAndroid } from "react-icons/di";
import { FaBeer } from 'react-icons/fa';

const App = () => {
  return (
    <div className="h-screen w-screen flex  justify-center items-center space-x-5">
      <div className="card">
        <div className="logo_row">
          <img className="element" alt="expressJS" src="https://github.com/Nolann-epi/cardAnimation/blob/main/assets/icons8-nodejs-96.png" height={50} width={50} />
          
          <FaBeer className="element_center" size={90} />
          <DiAndroid className="element" size={90} />
        </div>
        <div className="logo_row">
          <DiAndroid className="element" size={90} />
          <DiAndroid className="element_center" size={90} />
          <FaBeer className="element" size={90} />
        </div>
        <div className="logo_row">
          <FaBeer className="element" size={90} />
          <DiAndroid className="element_center" size={90} />
          <DiAndroid className="element" size={90} />
        </div>
      </div>
    </div>
  );
};

export default App;
