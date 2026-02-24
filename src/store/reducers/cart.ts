import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
<<<<<<< HEAD
<<<<<<< HEAD
import type { Game } from "../../types";
=======
import type { Game } from "../../pages/home";
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import type { Game } from "../../types";
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
            const idGame = state.items.find((item)=> item.id === action.payload.id);
            if(!idGame){
                state.items.push(action.payload);
            }else{
                alert("Jogo já adicionado!");
            }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
        },
        remove:(state, action: PayloadAction<number>)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload);
            
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            state.items.push(action.payload);
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
            state.items.push(action.payload);
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
        },
        open:(state)=>{
            state.isOpen = true;
        },
        close: (state)=>{
            state.isOpen=false;
>>>>>>> cb1aa65 (commit 2: adicionando e removendo jogos  ao carrinho.)
        }
    }

});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const {add, remove} = cartSlice.actions;
=======
export const {add} = cartSlice.actions;
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
export const {add, remove} = cartSlice.actions;
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
export const {add} = cartSlice.actions;
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
export const {add, remove} = cartSlice.actions;
>>>>>>> b69a459 (Commit 4: fix useAppSelector e desenvolvendo lógica de remoção de items do carrinho.)
=======
export const {add, remove, open, close} = cartSlice.actions;
>>>>>>> cb1aa65 (commit 2: adicionando e removendo jogos  ao carrinho.)
export default cartSlice.reducer;