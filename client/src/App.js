import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import { useEffect, useState } from "react";
import Browse from "./components/Browse";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchCarsAndComments = async () => {
      const carsResp = await axios.get(`${baseURL}/cars`, config);
      const commentsResp = await axios.get(`${baseURL}/comments`, config);
      const comments = commentsResp.data.records;
      const linkedCars = carsResp.data.records.map((car) => {
        return {
          ...car,
          fields: {
            ...car.fields,
            comments: car.fields.comments
              ? comments.filter((comment) =>
                  car.fields.comments.includes(comment.id)
                )
              : [],
          },
        };
      });
      setCars(linkedCars);
      
    }
    fetchCarsAndComments();
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
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form cars={cars} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
