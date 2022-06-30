import React from 'react'

function About() {
  return (
    <>
     <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded" style={{minHeight:360,width:"75%" , margin:" 40px auto" , border:"none"}}>
       <h2 style={{ textAlign:"center", color:"rgb(207, 14, 207)"}}>Little About Me</h2>
  <div className="card-body">
    
    <p className="card-text" style={{letterSpacing:2, fontSize:"1.2rem"}}>this is pratik, a mern stack developer with no CS or technical background , yes you read right, I don't have any degree. actually I from medical background but I descide to take my carrer in coding then I learn javascript, react, node.js and other technolgy . I love coding beacause I like practical stuff and solving problems. I love to explore and learn new things . apart from this , I am also trader . so this was little about me  </p>
    
  </div>
</div>
    </>
  )
}

export default About
