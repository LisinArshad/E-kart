import {configureStore} from '@reduxjs/toolkit'
import productSlice from './Slices/productSlice'
import wishSlice from './Slices/wishSlice'

const productstore=configureStore({
    reducer:{
        productReducer:productSlice,
        wishReducer:wishSlice

    }
})
export default productstore