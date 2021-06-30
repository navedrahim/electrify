import { Route, Link } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import { useEffect, useState } from "react";
import Car from "./Car";
import Detail from "./Detail";

function Browse () {


    const [cars, setCars] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(true);

    useEffect(() => {
      const fetchCars = async () => {
        const resp = await axios.get(baseURL, config);
        setCars(resp.data.records);
        console.log(resp.data.records);
      };
      fetchCars();
    }, [toggleFetch]);

  return (
<div>

     
        <main>
          {cars.map((car) => (
            <Link to={`/browse/detail/${cars.id}`}>
              <Car key={car.id} car={car} setToggleFetch={setToggleFetch} />
            </Link>
          ))}
        </main>
      
      <Route path="/browse/detail/:id">
        <Detail cars={cars} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  )
          }


export default Browse;