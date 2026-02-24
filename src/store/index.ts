import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/reducers/cart";
import gameApi from "../services/api";
export const store = configureStore({
    reducer:{
        cart:  cartReducer,
        [gameApi.reducerPath]:gameApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;