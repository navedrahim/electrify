import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import axios from "axios";
import { useEffect, useState } from "react";
import Browse from "./components/Browse/Browse.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Home from "./components/Home/Home.jsx";
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
    };
    fetchCarsAndComments();
  }, [toggleFetch]);
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
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
