import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
   <div className='container-fluid bg-dark text-white'>
        <Row>
            <Col sm={12} md={5}>
              <h4 className='text-white'>E-cart</h4>
              <p style={{textAlign:'justify' , color:'white'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum nesciunt, quia, sequi velit pariatur esse saepe architecto consequuntur nisi tenetur iste, eveniet labore itaque facilis quisquam. Pariatur, qui incidunt!
              </p>
            </Col>
            <Col sm={12} md={2}>
            <div className='d-flex flex-column' style={{textDecoration:'none'}}>
                <h4>Pages</h4>
                 <Link to={'/'} >Home</Link>
                 <Link to={'/wish'}>Wishlist</Link>
                 <Link to={'/cart'}>Cart</Link>
            </div>
            </Col>
            <Col sm={12} md={5}>
            <h3>FeedBack</h3>
            <textarea className='form-control' name="" id=""></textarea>
            <button className='btn btn-success mt-2'>Send</button>
            </Col>
        </Row>
   </div>
    </>
  )
}

export default Footer