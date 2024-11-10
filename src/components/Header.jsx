import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
         <Link to={'/'} style={{textDecoration:'none',color:'darkblue'}} className='fw-bold'>
              <i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#f58f00",}} />
               {' '}
                E-Cart
         </Link>
          </Navbar.Brand>
          <div>
            <Link className='btn border border-2 border-dark text-dark me-2' to={'/wish'}>
            <i className="fa-solid fa-heart me-2" style={{color: "#f20779",}} />
            Wishlist
            </Link>
            <Link className='btn border border-2 border-dark me-2 text-dark' to={'/cart'}>
            <i className="fa-solid fa-basket-shopping me-2" style={{color: "#156139",}} />
            Cart
            </Link>

          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header