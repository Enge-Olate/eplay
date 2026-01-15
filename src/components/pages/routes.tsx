import { Route, Routes } from "react-router-dom";
import Home from "./home";

export default function Paths(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>   
    )
}