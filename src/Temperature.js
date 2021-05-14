import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="temperature">
      <div>
        <span id="temperature"> 19 </span>
        <a href="#" id="celsius" className="active">
          °C
        </a>
        |
        <a href="#" id="fahrenheit">
          °F
        </a>
      </div>
    </div>
  );
}
