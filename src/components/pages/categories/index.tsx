import Footer from "../../Footer";
import ProductsList from "../../ProductList";

export default function Categories(){
    return(
        <>
        <ProductsList title="RPG" background="gray" />
        <ProductsList title="Ação" background="black" />
        <ProductsList title="Aventura" background="gray" />
        <ProductsList title="FPS" background="black" />
        <Footer />
        </>
    );
}