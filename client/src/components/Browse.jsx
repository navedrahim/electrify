import React from "react";
import { Link } from "react-router-dom";

import Car from "./Car";

function Browse(props) {
  const { cars, setToggleFetch } = props;

  return (
    <div>
      {cars.map((car) => (
        <Link to={`/detail/${cars.id}`}>
          <Car key={car.id} car={car} setToggleFetch={setToggleFetch} />
        </Link>
      ))}
    </div>
  );
}

export default Browse;
