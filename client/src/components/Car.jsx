import { Link } from "react-router-dom";

function Car(props) {
  const { car } = props;
  return (
    <div>
    <Link to={`/detail/${car.id}`}>
      <h3>{car.fields.make} {car.fields.model}</h3>
    </Link>

    </div>
  );
}

export default Car;
