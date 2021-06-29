import { Route, Link } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Car from "./components/Car";
import Detail from "./components/Detail";
import "./App.css";

function App() {
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
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <main>
          {cars.map((car) => (
            <Link to={`/detail/${cars.id}`}>
              <Car key={car.id} car={car} setToggleFetch={setToggleFetch} />
            </Link>
          ))}
        </main>
      </Route>
      <Route path="/car/:id">
        <Detail cars={cars} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
