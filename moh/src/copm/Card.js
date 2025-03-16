import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({title,descreption}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img 
        className="card-img-top" 
        src="https://via.placeholder.com/150" 
        alt="Card image cap" 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {descreption}
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
