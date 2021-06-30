import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function AddCar(props) {
  const [make, setMake] = useState("");
  const [model, setModel]= useState("");
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [price, setPrice] = useState(0);

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
    }
  }

  return (

  )
}

export default AddCar;
