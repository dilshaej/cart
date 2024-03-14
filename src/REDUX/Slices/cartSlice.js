import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart : (state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const remainingProdcuts = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                state = [...remainingProdcuts,existingProduct]
            }else {
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }

        },
        removeCartItem : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        incQuantity : (state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProdcuts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProdcuts,existingProduct]
        },
        decQuantity : (state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProdcuts = state.filter(item=>item.id!=existingProduct.id)
            state = [...remainingProdcuts,existingProduct]
        },
        emptyCart : (state,action)=>{
            return state = []
        }
    }
})

export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer