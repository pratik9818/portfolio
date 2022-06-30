
import React from 'react'

function Skills() {
  return (
    <div>
      <a  style={{ textDecoration: "none"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Skills</a>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 style={{color:"black"}} id="offcanvasRightLabel">SKILLS I HAVE... </h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
  <span style={{fontFamily:'cursive', color:"black"}}>HTML</span>
<div className="progress my-3">
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<span style={{fontFamily:'cursive', color:"black"}}>CSS</span>
<div className="progress my-3">
  <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<span style={{fontFamily:'cursive', color:"black"}}>JAVASCRIPT</span>
<div className="progress my-3">
  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "66%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<span style={{fontFamily:'cursive', color:"black"}}>REACT JS</span>
<div className="progress my-3">
  <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "55%"}}  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<span style={{fontFamily:'cursive', color:"black"}}>BOOTSTAP</span>
<div className="progress my-3">
  <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "80%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<span style={{fontFamily:'cursive', color:"black"}}>MATERAIL UI</span>
<div className="progress my-3">
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "69%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<span style={{fontFamily:'cursive', color:"black"}}>NODE JS</span>  
<div className="progress my-3">
  <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "55%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<span style={{fontFamily:'cursive', color:"black"}}>MONGO DB</span>
<div className="progress my-3">
  <div className="progress-bar bg-dark progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "65%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>



  </div>
</div>
    </div>
  )
}

export default Skills


