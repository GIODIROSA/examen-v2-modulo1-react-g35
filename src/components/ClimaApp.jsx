import React, { useEffect, useState } from "react";
import ClimaForm from "./ClimaForm";
import ClimaInfo from "./ClimaInfo";
import style from "../assets/css/sectionFormulario.module.css";
import ClimaMap from "./ClimaMap";

// variable externas
const urlKeyApi = "50bb825efd244b6ba9b231431220708";
const urlClimaApi = `http://api.weatherapi.com/v1/current.json?key=${urlKeyApi}&q=`;

const ClimaApp = () => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

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
        setTimeout(() => {
          setClima(data);
        }, 2000);
      })
      .catch((err) => {
        setError(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangeCiudad = (ciudad) => {
    setClima(null);
    loadInfo(ciudad);
  };

  return (
    <>
      <div className={style.contenedorPrincipal}>
        <div className={style.contenedorInput}>
          <ClimaForm onChangeCiudad={handleChangeCiudad} />
        </div>

        <div className={style.contenedorMapa}>
          {clima ? <ClimaMap clima={clima} /> : "loading..."}
        </div>
      </div>

      {!error && <p>En espera...</p>}
      {/* //modificar */}
      {clima ? <ClimaInfo clima={clima} /> : "loading..."}

      {loading && <p>Cargando...</p>}
    </>
  );
};

export default ClimaApp;
