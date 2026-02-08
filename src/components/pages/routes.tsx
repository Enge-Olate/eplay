import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Categories from "./categories";
import { Product } from "./product";

export default function Paths(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/categories" element={<Categories />}/>
            <Route path="/produto/:id" element={<Product />}/>
        </Routes>   
    )
}