import React, { useEffect, useState } from "react";
import ClimaForm from "./ClimaForm";
import ClimaInfo from "./ClimaInfo";
const urlKeyApi = "50bb825efd244b6ba9b231431220708";
const urlClimaApi = `http://api.weatherapi.com/v1/current.json?key=${urlKeyApi}&q=`;

const ClimaApp = () => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = "País | " + clima?.location?.name ?? "";
  }, [clima]);

  const loadInfo = (ciudad = "berlin") => {
    fetch(`${urlClimaApi}${ciudad}&aqui=no`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        setClima(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("La ciudad fue localizada");
      });
  };

  const handleChangeCiudad = (ciudad) => {
    setClima(null);
    loadInfo(ciudad);
  };

  return (
    <>
      <ClimaForm onChangeCiudad={handleChangeCiudad} />
      {!loading && <p>Cargando...</p>}
      <ClimaInfo clima={clima} />
    </>
  );
};

export default ClimaApp;
