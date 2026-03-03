import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Game } from "../../types";
interface cartState{
    items: Game[];
    isOpen: boolean;
}

const initialState: cartState={
    items:[],
    isOpen: false,
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
            state.items = state.items.filter((item)=> item.id !== action.payload);
            
        },
        open:(state)=>{
            state.isOpen = true;
        },
        close: (state)=>{
            state.isOpen=false;
        }
    }

});
export const {add, remove, open, close} = cartSlice.actions;
export default cartSlice.reducer;