import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
    <div className='container-fluid p-4'>
      <h3>Cart Summary</h3>
      <Row>
        <Col sm={12} md={8}>
        <table className="table table-border shadow border-4 border-dark">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
            <td>1</td>
            <td>iphone 14</td>
            <td><img src="https://www.maplestore.in/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN_43b0347b-c716-4297-b1d4-a15af53ad270.jpg?v=1701815316" width={'250px'} alt="" /></td>
            <td>75000</td>
            <td>
              <button className='btn'>+</button>
              <input type="text" className='form-control w-25' value={'1'} />
              <button className='btn'>-</button>
            </td>
            <td><button className="btn"><i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></button></td>
            </tr>
          </tbody>

        </table>
        </Col>
        <Col sm={12} md={4}>
        <div className="border shadow p-5 border-3">
          <h4>Total items : 1</h4>
          <h4>Total Ammount : 75000</h4>
          <div className='mt-2 d-grid'>
            <button className="btn btn-success">Checkout</button>
          </div>
        </div>
        <Link to={'/'}  className='btn btn-outline-info mt-3'>Shop More..</Link>
        </Col>
      </Row>

    </div>
    </>
  )
}

export default Cart