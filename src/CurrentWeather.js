import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="row">
      <div className="col-6">
        Last Uptaded:{" "}
        <div className="date" id="date">
          Friday 14:30{" "}
        </div>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="clear"
          id="icon"
          className="icon"
        />
      </div>

      <div className="col-6">
        <div className="weatherDescription" id="weather-description">
          {" "}
          Clear Sky{" "}
        </div>
        <div className="humidity" id="humidity">
          Humidity: 5%
        </div>
        <div className="wind" id="wind">
          {" "}
          Wind: 5 km/h{" "}
        </div>
      </div>
    </div>
  );
}
