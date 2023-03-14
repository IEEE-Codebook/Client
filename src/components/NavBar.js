import React,{useState} from 'react'
// import ReactDOM from 'reactdom'

const NavBar=()=>{
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        
<nav>
  <div class="logo-text">
    <a href="#"><img src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg" alt="Logo" /></a>
    <a href="#">CODEBOOK</a>
  </div>
  <div class="nav-links">
    <a href="#">About</a>
    {isLoggedIn ? (
             <a href="#" onClick={() => setIsLoggedIn(false)}>
                   Log Out
                 </a>
               ) : (
                 <a href="#" onClick={() => setIsLoggedIn(true)}>
                   Log In
                 </a>
               )}
    
    <a href="#">Signup</a>
  </div>
</nav>

    )
    
}


export default NavBar;