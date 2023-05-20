import React from "react";

const ClimaInfo = ({ clima }) => {
  return (
    <>
      <p>{clima?.location.name}</p>
      <p>{clima?.location.country}</p>
      <p>{clima?.location.region}</p>
      <p>{clima?.location.tz_id}</p>
      <p>{clima?.location.localtime.slice(10, -3)}h</p>
      <p>{clima?.current.condition.text}</p>
      <p>{clima?.current.temp_c}°</p>
      <p>{clima?.location.lon}</p>
      <p>{clima?.location.lat}</p>

      {/* ==================================== */}

      <div>
        <img
          src={`http:${clima?.current.condition.icon}`}
          alt={clima?.location.name}
          width="128"
        />
      </div>

      {/* ==================================== */}

    
    </>
  );
};

export default ClimaInfo;
