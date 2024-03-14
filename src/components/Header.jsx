import React from 'react'
import { Badge,Container,Form, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../REDUX/Slices/productSlice';

function Header({insideHome}) {

     const dispatch = useDispatch()

  const wishlistCount = useSelector(state=>state.wishlistReducer).length
  const cartCount = useSelector(state=>state.cartReducer).length
  return (
    <div>
       <Navbar style={{zIndex:'10'}} expand="lg" className="bg-info position-fixed top-0 w-100 " >
      <Container >
        <Navbar.Brand href="#" style={{color:'white'}}><i className="fa-solid fa-truck-fast"></i><Link to ={'/'} className='text-light fw-bolder' style={{textDecoration:'none'}}> E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           { insideHome && 
            <Nav.Link>
               <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'400px'}} className='fotm-control' type="text" placeholder='Search Products here!!!' />
               </Nav.Link>
               }
        
          </Nav>
        
          <Nav
            className="me-0 ms-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><i className="fa-solid fa-heart" style={{color:'red'}}></i> <Link className='text-light ' style={{textDecoration:'none'}} to={'/wishlist'}>Wishlist</Link> <Badge bg="secondary">{wishlistCount}</Badge></Nav.Link>
            <Nav.Link><i className="fa-solid fa-cart-shopping" style={{color:'orange'}}></i> <Link className='text-light ' style={{textDecoration:'none'}} to={'/cart'}>Cart </Link><Badge bg="secondary">{cartCount}</Badge></Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header