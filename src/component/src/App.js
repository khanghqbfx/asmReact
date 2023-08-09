
import {HashRouter ,Routes ,Route} from 'react-router-dom';
import HomePages from './component/pages/HomePages ';
import ShopPages from './component/pages/ShopPages';
import Login from './component/LoginPages/Login';
import Register from './component/registerPages/Register';
import Detail from './component/pages/DetailPage';
import Cart from './component/pages/CartPage';
import Checkout from './component/pages/CheckoutPage';

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route exact path='/' Component={HomePages} />
        <Route path='/Shop' Component={ShopPages} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/detail/:id' Component={Detail} />
        <Route path='/cart' Component={Cart} />
        <Route path='/checkout' Component={Checkout} />

    </Routes>
</HashRouter>
   
  );
}

export default App;
