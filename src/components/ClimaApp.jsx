import React, { useEffect, useState } from "react";
import ClimaForm from "./ClimaForm";
import ClimaInfo from "./ClimaInfo";
import ClimaMap from "./ClimaMap";
import LoadingInfo from "./LoadingInfo";
import styles from "../assets/css/sectionWidget.module.css";

// variable externas
const urlKeyApi = "50bb825efd244b6ba9b231431220708";
const urlClimaApi = `http://api.weatherapi.com/v1/current.json?key=${urlKeyApi}&q=`;

const ClimaApp = () => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  //invoca la function que genera la petición a la API weather
  useEffect(() => {
    loadInfo();
  }, []);

  //carga el nombre de la ciudad en la pestaña de forma dinamica
  useEffect(() => {
    document.title = "Ciudad: | " + clima?.location?.name ?? "";
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

  //captura la ciudad producto del evento click de buscar del formulario
  const handleChangeCiudad = (ciudad) => {
    setClima(null);
    loadInfo(ciudad);
  };

  return (
    <>
      <div className={styles.contenedorTitulo}>
        <h1 className={styles.tituloPrincipal}>Widget de clima</h1>
        <p className={styles.parrafoPrincipal}>
          Mini aplicación que hace la busqueda climatica por ciudad en el mundo
        </p>
      </div>
      <div className={styles.contenedorPrincipal}>
        <div className={styles.contenedorWidget}>
          <ClimaForm onChangeCiudad={handleChangeCiudad} />
          <hr />
          {/* ================================= */}
          {/* contenido  app */}
          {!error && <p>En espera...</p>}

          {clima ? <ClimaInfo clima={clima} /> : <LoadingInfo />}
          {clima ? <ClimaMap clima={clima} /> : "Cargando mapa..."}
        </div>
      </div>
    </>
  );
};

export default ClimaApp;
