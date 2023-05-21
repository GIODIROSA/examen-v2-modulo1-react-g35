import React from "react";
import styles from "../assets/css/sectionData.module.css";

const ClimaInfo = ({ clima }) => {
  return (
    <>
      <div className={styles.contenedorData}>
        <p className={styles.textoPrincipal}>{clima?.location.name}</p>
        <p className={styles.textoSecundario}>{clima?.location.country}</p>
        <p>
          <strong>Contienente:</strong>
          {clima?.location.tz_id}
        </p>
        <hr />
        <p className={styles.textoData}>
          <strong>Hora actual:</strong>
          <span>{clima?.location.localtime.slice(10, -3)}h</span>
        </p>
        <hr />
        <p>
          <strong>Condición ambiental:</strong>
          {clima?.current.condition.text}
        </p>
        <hr />
        <p className={styles.textoData}>
          <strong>Temperaura actual:</strong>
          <span>{clima?.current.temp_c}°</span>
        </p>
      </div>
    </>
  );
};

export default ClimaInfo;
