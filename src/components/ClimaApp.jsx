import React, { useEffect, useState } from "react";
import ClimaForm from "./ClimaForm";
import ClimaInfo from "./ClimaInfo";

const CLIMA_API_KEY = "50bb825efd244b6ba9b231431220708";

const ClimaApp = () => {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async (ciudad = "berlin") => {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${CLIMA_API_KEY}&q=${ciudad}}&aqi=no`
      );
      const data = await request.json();
      console.log(data);
      setClima(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCiudad = (ciudad) => {
    setClima(null);
    loadInfo(ciudad);
  };

  return (
    <>
      <ClimaForm onChangeCiudad={handleChangeCiudad} />

      <ClimaInfo clima={clima} />

      {/* <p>{clima?.location.name}</p>
      <p>{clima?.location.region}</p>
      <p>{clima?.location.country}</p> */}
    </>
  );
};

export default ClimaApp;
