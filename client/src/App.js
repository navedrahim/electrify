import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import { useEffect, useState } from "react";
import Browse from "./components/Browse";
import Navbar from "./components/Navbar";
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

      <Route exact path="/browse">
        <Browse cars={cars} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/detail/:id">
        <Detail cars={cars} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
