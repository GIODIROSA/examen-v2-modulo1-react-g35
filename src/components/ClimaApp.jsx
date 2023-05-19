import React, { useState } from "react";
import ClimaForm from "./ClimaForm";

const CLIMA_API_KEY = "50bb825efd244b6ba9b231431220708";
const CLIMA_API_URL =
  "http://api.weatherapi.com/v1/current.json?key=&q=&aqi=no";

const ClimaApp = () => {
  const [clima, setClima] = useState(null);

  return (
    <>
      <ClimaForm />
    </>
  );
};

export default ClimaApp;
