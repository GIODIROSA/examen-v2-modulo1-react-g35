import React, { useState } from "react";
import Swal from "sweetalert2";

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

    //enviar la ciudad que fue ingresada en el input
    onChangeCiudad(ciudad);
  };

  return (
    <div>
      <form onSubmit={handleSubmitClima}>
        <input
          type="text"
          name="buscar"
          placeholder="Busca una ciudad"
          onChange={handleCiudad}
        />
        <button>Buscar</button>
      </form>
      <b>{ciudad&& "la ciudad es:"}</b>
    </div>
  );
};

export default ClimaForm;
