import React,{useState} from 'react'
// import ReactDOM from 'reactdom'

const NavBar=()=>{
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        // <nav>
        //     <div className="cbook">
        //       <img
        //         src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg"
        //         className="image"
        //         height={"50px"}
        //         alt=""
        //       />
        //       <div className="codebook">
        //         <a href="#">
        //           <h1>CODEBOOKvrgrg</h1>
        //         </a>
        //       </div>
        //     </div>
        //     <div className="navbar">
        //       <a href="#">About</a>
        //       <a href="#">SignUp</a>
        //       {isLoggedIn ? (
        //         <a href="#" onClick={() => setIsLoggedIn(false)}>
        //           Log Out
        //         </a>
        //       ) : (
        //         <a href="#" onClick={() => setIsLoggedIn(true)}>
        //           Log In
        //         </a>
        //       )}
        //     </div>
        //   </nav>
<nav>
  <div class="logo-text">
    <a href="#"><img src="https://cdn.xxl.thumbs.canstockphoto.com/code-book-logo-icon-design-eps-vector_csp63585084.jpg" alt="Logo" /></a>
    <a href="#">CODEBOOK</a>
  </div>
  <div class="nav-links">
    <a href="#">About</a>
    <a href="#">Login</a>
    <a href="#">Signup</a>
  </div>
</nav>

    )
    
}


export default NavBar;