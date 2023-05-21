import React from "react";
import styles from "../assets/css/sectionTextoBusqueda.module.css";

const TextoBusqueda = ({ ciudad }) => {
  return (
    <div className={styles.contenedorTextoBusqueda}>
      <p
        className={styles.TextoBusqueda}
      >{`La ciudad es: ${ciudad.toUpperCase()}`}</p>
    </div>
  );
};

export default TextoBusqueda;
