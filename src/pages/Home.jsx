import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk } from '../Redux/Slices/productSlice';
import Spinner from 'react-bootstrap/Spinner';


function Home() {
    const { products, error, loading } = useSelector((state) => state.productReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductThunk())
        console.log(products);
        
    }, [])

    return (
        <>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <Carousel>
                            <Carousel.Item>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" width={'100%'} height={'300px'} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cItn-bzkfpyt6753KtwC_2xtsUxMrJ57Yg&s" width={'100%'} height={'300px'} alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg" width={'100%'} height={'300px'} alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            loading ?
                                <h3> <Spinner animation="border" role="status">
                                </Spinner><span className="visually-hidden">Loading...</span>
                                </h3>
                                : (
                                    error?
                                    <h3>{error}</h3>
                                    :
                                    <>
                                    {products?.map(
                                        item=>(
                                            <div className="col mb-5">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{item?.title}</h5>
                                                       {item?.price}
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <Link to={`/view/${item?.id}`}><div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View more</a></div></Link>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    )}
                                    
                                    </>
                                   
                                )
                        }






                    </div>
                </div>
            </section>
        </>
    )
}

export default Home