import React from "react";
import { Link } from "react-router-dom";
import Car from "./Car";

function Browse(props) {
  const { cars, setToggleFetch } = props;

  // const result = cars.reduce(function (r, a) {
  //   r[a.make] = r[a.make] || [];
  //   r[a.make].push(a);
  //   return r;
  // }, Object.create(null));
  // console.log(result);
  // console.log(props)
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
