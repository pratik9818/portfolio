import React from 'react'
import p1 from "../img/p1.jpg"
// import p2 from "../img/p2.png"
// import p3 from "../img/p3.jpg"
// import p4 from "../img/p4.jpg"
function ProjectDeatails() {
  return (
    <>
      <div className="card" style={{width: "30rem"}}>
  <img src={p1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default ProjectDeatails
