import Banner from "../../Banner";
import ProductsList from "../../ProductList";

export default function Home(){
    return(
        <>
        <Banner />
        <ProductsList title="Promoções" background="black" />
        <ProductsList title="Em breve" background="gray" />
        </>
    );
}