import classes from './Header.module.css';
import { FaDollyFlatbed , FaUser} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

 const Header = () => {

     const navigate = useNavigate()

    return(
        <div>
            <div className={classes.header}>
                <ul>
                    <li className={ classes.home} onClick = {()=>navigate('/')}>Home</li>
                    <li onClick = {()=>navigate('/ShopPages')}>Shop</li>
                </ul>
                <h2>BOUTIQUE</h2>
                <ul>
                    <li>
                    <FaDollyFlatbed />
                    <span onClick = {() =>navigate('')}>Cart</span>
                    </li>
                    <li>
                    <FaUser />
                    <span>Login</span>
                    </li>
                </ul>
            </div>
           
        </div>
    )
 }


  export default Header