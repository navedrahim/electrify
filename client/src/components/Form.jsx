import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function AddCar(props) {
  const [make, setMake] = useState("");
  const [model, setModel]= useState("");
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [price, setPrice] = useState(0);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (useParams.id && props.cars.legnth > 0) {
      const editCar = props.cars.find((car) => car.id === useParams.id);
      if (editCar) {
        setMake(editCar.fields.make);
        setModel(editCar.fields.model);
        setMinRange(editCar.fields.minRange);
        setMaxRange(editCar.fields.maxRange);
        setPrice(editCar.fields.price);
      }
    }
  }, [params.id, props.cars])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCar = {
      make,
      model,
      minRange,
      maxRange,
      price,
    };
    if (params.id) {
      const carURL = `${baseURL}/${params.id}`;
      await axios.put(carURL, { fields: newCar }, config);
    } else {
      await axios.post(baseURL, { fields: newCar }, config);
    }
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }

  return (
    <form onSubmit

  )
}

export default Form;
