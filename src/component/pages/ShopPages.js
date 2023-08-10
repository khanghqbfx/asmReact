import Header from "../ShopPages/header"
import ProductsShop from "../ShopPages/ProductShop";
import MainNavigation from "../MainNavigation/MainNavigation";
import Footer from "../Footer/Footer";

 const ShopPages  = () => {
    return(
        <div>
            <MainNavigation/>
            <Header />
            <ProductsShop />
            <Footer />
        </div>
    )
    
 }

 export default ShopPages