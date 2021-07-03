import React from "react";
import { Link } from "react-router-dom";
import Car from "./Car";

function Browse(props) {
  const { cars, setToggleFetch } = props;

  return (
    <div>
      <main class="question">
        <p>Can't Find What You're Looking For?</p>
        <Link to="/new">
          <button>Add a Car</button>
        </Link>
      </main>

      <ul>
        {cars.map((car) => (
          <Car key={car.id} car={car} setToggleFetch={setToggleFetch} />
        ))}
      </ul>
    </div>
  );
}

export default Browse;
