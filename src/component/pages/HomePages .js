import Banner from '../HomPages/Banner';
import OtherInfo from '../HomPages/Other';
import Footer from '../Footer/Footer';
import ListCategories from '../HomPages/ListCategories';
import TrendingProducts  from '../HomPages/TrendingProducts';
import MainNavigation from '../MainNavigation/MainNavigation';
import { useSelector } from 'react-redux';
import Messenger from '../Messenger/Messenger'

import Popup from '../Popup/Popup';


const HomePages = () =>{
     const popup = useSelector((state) => state.popup.popup)
        console.log(popup)
    
  
    return(
        <div>
        <MainNavigation />
        <Banner />
        <ListCategories  />
       <TrendingProducts/>
       {popup && <Popup />} 
      <Messenger />
        <OtherInfo />
       
        <Footer />

        </div>
      
    )
}
   


export default HomePages