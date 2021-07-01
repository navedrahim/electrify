import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const history = useHistory();
  const params = useParams();
  const editCar = props.cars.find((car) => car.id === params.id);
  
  useEffect(() => {
    if (useParams.id && props.cars.length > 0) {
      if (editCar) {
        setMake(editCar.fields.make);
        setModel(editCar.fields.model);
        setMinRange(editCar.fields.minRange);
        setMaxRange(editCar.fields.maxRange);
        setPrice(editCar.fields.price);
        setImage(editCar.fields.image);
      }
    }
  }, [params.id, props.cars]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCar = {
      make,
      model,
      minRange,
      maxRange,
      price,
      image,
    };
    // const putCar = {
    //   make: editCar.fields.make,
    //   model,
    //   minRange,
    //   maxRange,
    //   price,
    //   image,
    // }
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="make">Make:</label>
      <input
        id="make"
        type="text"
        onChange={(e) => setMake(e.target.value)}
        value={make}
        required
      />
      <label htmlFor="model">Model:</label>
      <input
        id="model"
        type="text"
        onChange={(e) => setModel(e.target.value)}
        value={model}
        required
      />
      <label htmlFor="minRange">Minimum Range:</label>
      <input
        id="minRange"
        type="number"
        onChange={(e) => setMinRange(e.target.valueAsNumber)}
        value={minRange}
        required
      />
      <label htmlFor="maxRange">Maximum Range:</label>
      <input
        id="maxRange"
        type="number"
        onChange={(e) => setMaxRange(e.target.valueAsNumber)}
        value={maxRange}
        required
      />
      <label htmlFor="price">Price: $</label>
      <input
        id="price"
        type="number"
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
        required
      />
      <label htmlFor="image">Image Link:</label>
      <input
        id="image"
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        required
        />


      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
