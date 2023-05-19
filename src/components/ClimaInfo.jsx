import React from "react";

const ClimaInfo = ({ clima }) => {
  return (
    <>
      <p>{clima?.location.name}</p>
      <p>{clima?.location.country}</p>
      <p>{clima?.location.region}</p>
      <p>{clima?.location.tz_id}</p>
      {/* //buscar la manera de no mostrar undefined */}
      <p>{clima?.location.localtime.slice(10, -3)}h</p>
      <p>{clima?.current.condition.text}</p>
      <p>{clima?.current.temp_c}°</p>
      <p>{clima?.location.lon}</p>
      <p>{clima?.location.lat}</p>

      {/* ==================================== */}

      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${clima?.location.lon}5!3d${clima?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default ClimaInfo;
