import { Link } from "react-router-dom";

function Car (props) {
  const { car } = props;
  return (
    <Link to={`/car/${car.id}`}>
      <h3>{car.fields.model}</h3>
    </Link>
  )
}

export default Car;