import React from "react";
import styles from "../assets/css/loadingInfo.module.css";

const LoadingInfo = () => {
  return (
    <div className={styles.contenedorSpinner}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className={styles.textoCargandoInformacion}>Cargando la información solicitada</p>
    </div>
  );
};

export default LoadingInfo;
