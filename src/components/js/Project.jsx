
import '../css/Project.css'
import p1 from "../img/p1.jpg"
import p2 from "../img/p2.png"
import p3 from "../img/p3.jpg"
import p4 from "../img/p4.jpg"
function Project() {
  return (
    
      <div className="project-container shadow-lg p-3 mb-5 bg-body rounded" id="project">
       <div className="heading">  
       <h6 >PORTFOLIO</h6>
       <h2 >Latest Projects</h2>
         </div>
        
         <div className="project-box">
           <div className="project-box-1">
           <div className="project-sub-box">
             <img src={p1}   alt="/" />
            <div className="project-name">
              <div><a href="">news website</a></div>
              
            </div>
             </div>
             
           <div className="project-sub-box">
             <img src={p3}   alt="/" />
             <div className="project-name">
             <div><a href="">food website</a></div>
             
            </div>
           </div>
          
           </div>
           <div className="project-box-1">
           <div className="project-sub-box">
             <img src={p2}   alt="/" />
              <div className="project-name">
              <div><a href="">flipkart clone</a></div>
            
            </div>
           </div>
           <div className="project-sub-box">
             <img src={p4}   alt="/" />
              <div className="project-name">
              <div><a href="">portfolio website</a></div>
            
            </div>
           </div>
          
           </div>
           
         </div>
      </div>
    
  )
}

export default Project
