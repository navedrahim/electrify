import { useParams } from "react-router-dom";

function Detail(props) {
  const params = useParams();
  const info = props.cars.find((car) => car.id === params.id);

  return (
    <main id="card">
      <img src={info.fields.image} alt={info.fields.model} />
      <h4>Make:{info.fields.make}</h4>
      <h4>Model:{info.fields.model}</h4>
      <h4>Min Range:{info.fields.minRange} miles</h4>
      <h4>Max Range:{info.fields.maxRange} miles</h4>
      <h4>Price:${info.fields.price}</h4>
    </main>
  );
}

export default Detail;
