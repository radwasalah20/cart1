export default function User(props) {
    return(
        <div className="card" style={{
            backgroundColor: props.bg,
            color:props.color ,
            fontSize: props.fs

        }}>
  <img src={props.imgSrc} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.category}</h5>
    <p className="card-text">{props.price}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}