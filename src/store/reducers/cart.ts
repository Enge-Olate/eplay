import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Game } from "../../pages/home";
interface cartState{
    items: Game[];
}

const initialState: cartState={
    items:[]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add:(state, action: PayloadAction<Game>)=>{
            state.items.push(action.payload);
        }
    }

});
export const {add} = cartSlice.actions;
export default cartSlice.reducer;