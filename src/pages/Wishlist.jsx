import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromWishList } from '../Redux/Slices/wishSlice'

function Wishlist() {
  const { items } = useSelector((state) => state.wishReducer)
  const dispatch=useDispatch()
  

  return (
    <>
      <h2 className='text-center my-3'>Wishlist</h2>
      <div className='container-fluid row p-5'>

        {
           items?.length>0 ?
           items?.map(wish=>(

            <div className='col-3'>
            <div className="card h-100">
              <img className="card-img-top" src={wish.thumbnail} alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{wish.title}</h5>
                  ${wish.price}
                </div>
              </div>
              <div className="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
                <button className='btn' onClick={()=>(dispatch(removeFromWishList(wish.id)))}>
                <i className="fa-solid fa-heart-circle-minus fa-2xl" style={{color: "#f10909",}} />
                </button>
                <button className='btn'>
                <i className="fa-solid fa-cart-plus fa-2xl" style={{color: "#43df8f",}} />
                </button>
              </div>
            </div>
          </div>

           ))
           :
           <h3 className='text-center'>No items Added yet!!</h3>


        }


      </div>
    </>
  )
}

export default Wishlist