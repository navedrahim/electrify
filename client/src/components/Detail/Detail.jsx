import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comment from "../Comment";
import CommentForm from "../CommentForm";

function Detail(props) {
  const params = useParams();
  const info = props.cars.find((car) => car.id === params.id);

  return (
    <section id="info">
      <div id="card">
        <img className="detail-image" src={info.fields.image} alt={info.fields.model} />
        <h4>Make:{info.fields.make}</h4>
        <h4>Model:{info.fields.model}</h4>
        <h4>Min Range:{info.fields.minRange} miles</h4>
        <h4>Max Range:{info.fields.maxRange} miles</h4>
        <h4>Price:${info.fields.price}</h4>
        <Link to={`/edit/${info.id}`}>
          <button>Edit Car!</button>
        </Link>
      </div>
      <div id="comment">
        <ul>
          {info.fields.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
        <CommentForm car={info} setToggleFetch={props.setToggleFetch} />
      </div>
    </section>
  );
}

export default Detail;
