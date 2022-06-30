import React from 'react'
// import '../css/Footer.css'
function Footer() {
  return (
    <footer class="pt-5 text-muted d-flex justify-content-between mx-4" style={{minHeight:160}}  >
   <div style={{fontSize:19,fontFamily:"cursive" ,padding:"15px 20px"}}>created by pratik singh 
   <h5 style={{marginTop:4 , letterSpacing:1, fontSize:12}}  >All right reserver· © 2022</h5>
   </div>
   
   

    <div style={{marginTop:19}}>
    <a className='mx-2 ' href=""><ion-icon size="large"name="mail-outline"></ion-icon></a>
    <a className='mx-2' href=""><ion-icon size="large" name="logo-instagram"></ion-icon></a>
    <a className='mx-2' href=""><ion-icon size="large" name="logo-linkedin"></ion-icon></a>
    <a className='mx-2' href=""><ion-icon size="large" name="logo-github"></ion-icon></a>
    </div>
  
  </footer>
  )
}

export default Footer