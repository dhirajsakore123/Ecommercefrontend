import { createSlice } from "@reduxjs/toolkit";

const AddtoCart=createSlice({
    name:'Cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addtoCart:(state,action)=>{
            const find=state.cart.find(item=>item.id===action.payload.id)
             if(!find){
                state.cart.push(action.payload);
             }
        },
        RemoveItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !==action.payload.id)
        }

    }
})

export default AddtoCart.reducer;
export const {addtoCart,RemoveItem}=AddtoCart.actions

