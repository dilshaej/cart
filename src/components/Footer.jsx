import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div >
          <div style={{height:'300px',color:'white'}} className=' mt-5 w-100 p-5 bg-info'  >
<div className="footer-content d-flex justify-content-between container">
    <div style={{width:'400px'}} className="media">
    <h5 className='d-flex'><i className="fa-solid fa-truck-fast"></i>E Cart</h5>
    <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia dolorem voluptate voluptatum.</p>
    <span>Code licensed Luminar, docs CC BY 3.0 </span> <br />
    <span>Currently v5.3.2.</span>
    </div>
    <div className="links d-flex flex-column">
<h5>Links</h5>
<Link to={'/'} style={{textDecoration:'none', color:'white'}}> Home</Link>
<Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
<Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wishlist</Link>


    </div>
    <div className="guides d-flex flex-column">
<h5>Guides</h5>
<a href="https://react.dev/" traget='_blank' style={{textDecoration:'none', color:'white'}}>React JS</a>
<a href="https://reactrouter.com/en/main" traget='_blank' style={{textDecoration:'none', color:'white'}}>React Routing</a>
<a href="https://react-bootstrap.github.io/" traget='_blank' style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>

    </div>
    <div className="contact">
        <h5>Contact Us</h5>
        <div className="d-flex">
            <input type="text" className="form-control me1" placeholder='Email Id Please' />
            <button className='btn btn-danger'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="icons d-flex justify-content-between mt-3" >
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-1x"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-twitter fa-1x"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-facebook-f"></i></a>
<a href="https://react.dev/ " target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-envelope"></i></a>
<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-tiktok"></i></a>

<a href="https://react.dev/" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-github fa-1x"></i></a>


        </div>
    </div>
</div>
<p className='text-center mt-5'>Copyright &copy; 2024 Cart. Built with React.</p>
    </div>
    </div>
  )
}

export default Footer