import Banner from "../../Banner";
import Footer from "../../Footer";
import ProductsList from "../../ProductList";

export default function Home(){
    return(
        <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
        <ProductsList title="Em breve" background="black" />
        <Footer />
        </>
    );
}