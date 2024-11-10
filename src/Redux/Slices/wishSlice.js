import { createSlice } from "@reduxjs/toolkit";
import Wishlist from "../../pages/Wishlist";
import { toast } from "react-toastify";

 const WishlistSlice=createSlice({
    name:'wishlit',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishList(state,action){
            const existing= state.items.find(item=>item.id==action.payload.id)
            if(existing){
                toast.warn('product already added to wishlist')
            }
            else{
                state.items.push(action.payload)
            toast.success('item added to wishlist')

            }
            
        },
        removeFromWishList (state,action){
            state.items=state.items.filter(item=>item.id!=action.payload)
        }
    }
 })

 export default WishlistSlice.reducer
 export const{addToWishList,removeFromWishList}=WishlistSlice.actions