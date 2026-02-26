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
            const idGame = state.items.find((item)=> item.id === action.payload.id);
            if(!idGame){
                state.items.push(action.payload);
            }else{
                alert("Jogo já adicionado!");
            }
        },
        remove:(state, action: PayloadAction<number>)=>{
            state.items.filter((item)=> item.id !== action.payload);
            
        }
    }

});
export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;