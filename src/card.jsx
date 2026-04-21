import "./card.css";
import prodimg from "../public/favicon.svg"
export default function Card(details) {
  return (
    <>
      <div className="card">
        <img src={details.img} alt="" />
        <h1>{details.name}</h1>
        <p> {details.disc}</p>
        <p>price : {details.price}</p>
      </div>
    </>
  );
}
