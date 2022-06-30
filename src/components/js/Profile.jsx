import React from 'react'
import pimg from '../img/pimg.jpg'
function Profile() {
  return (
    <div>
      <div classNameName="card bg-dark text-white"  >
    <img src="https://graphix.sd/resources/slides/mockup4.jpg" className="card-img" alt="..." style={{minHeight:800 ,objectFit: "cover",width: "50",height: "100"}} />
  <div className="card-img-overlay " style={{display:"flex", justifyContent:"center",alignItems:"center", color:"black", flexDirection:"column", marginTop:130}}>

  <h1 className="card-title" style={{fontSize: 'calc(0.75em + 6vw)', color:"wheat",fontFamily:"Courier New" ,letterSpacing:8}}> <h6 style={{letterSpacing:0, fontSize:25, color:"white",fontFamily:"Courier New", marginLeft:10}}>I am, </h6><span style={{marginRight:20}}>PRATIK</span><span>SINGH</span></h1>
  <p className="card-text"style={{fontSize: 'calc(0.75em + .8vw)', color:"white",marginLeft:-30, marginTop:-10,letterSpacing:2}} > A MERN Stack Developer </p>
      <img src="https://cdn-icons-png.flaticon.com/512/1910/1910037.png" alt=""  style={{height:170, width:170, margin:20,borderRadius:200,border: '1px solid white', backgroundColor:"transparent"}}/>
    
    
    <div className="card-text" >
      <div style={{color:"white", marginTop:38, fontFamily:"cursive",fontSize: 'calc(0.6em + 0.5vw)'}}>I went to medical collage and returned as a programmer.</div>
     
      </div>
  </div>
</div>  
    </div>
  )
}

export default Profile

// background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/img/cafa.jpg');
// background-attachment: fixed;
// background-size: cover;