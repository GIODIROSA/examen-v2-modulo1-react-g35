import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "../assets/css/sectionForm.module.css";
import TextoBusqueda from "./TextoBusqueda";

const ClimaForm = ({ onChangeCiudad }) => {
  const [ciudad, setCiudad] = useState("");

  const handleCiudad = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setCiudad(value);
    }
  };

  const handleSubmitClima = (e) => {
    e.preventDefault();

    //validar barra de busqueda
    if (!ciudad.trim()) {
      Swal.fire({
        icon: "error",
        title: "Cometiste un error",
        text: "Debes escribir una ciudad, en el mundo!!",
        footer: '<a href="#!">Necesitas ayuda?</a>',
      });

      return;
    }

    //enviando la ciudad que fue ingresada en el input
    onChangeCiudad(ciudad);
  };

  return (
    <div className={styles.contenedorFomularion}>
      <form onSubmit={handleSubmitClima}>
        <input
          className={styles.inputSearch}
          type="text"
          name="buscar"
          placeholder="Busca una ciudad"
          onChange={handleCiudad}
        />
        <div className={styles.contenedorBtnBuscar}>
          <button className={styles.btnBuscar}>Buscar</button>
        </div>
      </form>
      <b>{ciudad && <TextoBusqueda ciudad={ciudad} />}</b>
    </div>
  );
};

export default ClimaForm;
