import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {loginActions} from '../../store/Login';
import { FaUser ,FaAngleDown ,FaDollyFlatbed} from "react-icons/fa"

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  //Hook chuyển trang
  const navigate = useNavigate();

  //State người dùng login

  const isData= useSelector((state) => state.login.isLogin);
  //Dispatch logout actions
  const dispatch = useDispatch();

  //Chuyển trang
  const pageHandler = (page) => {
    navigate(`/${page}`);
  };

  //Log out người dùng
  const logOutHandler = () => {
    dispatch(loginActions.loguot());
    localStorage.removeItem('user_accounts');
    navigate('/');
  };

  //Thông tin người đăng nhập
  const currentUserInfo = localStorage.getItem('user_accounts');
  const pasedCurren = currentUserInfo ? JSON.parse(currentUserInfo) : null;
console.log(pageHandler)




  return (
    <div className={classes.navBar}>
      <button className={classes.btn_left} onClick={() => pageHandler('')}>
        Home
      </button>
      <button className={classes.btn_left} onClick={() => pageHandler('shop')}>
        Shop
      </button>
      <header onClick={() => pageHandler('')}>BOUTIQUE</header>
      {isData && (
        <button
          className={classes.btn_right}
          id={classes.logout}
          onClick={logOutHandler}
        >
          (Log Out)
        </button>
      )}
      <button
        className={classes.btn_right}
        onClick={() => pageHandler('login')}
      >
        <FaUser/>
        {!isData ? (
          'Login'
        ) : (
          <div>
            {currentUserInfo && currentUserInfo.full_name}
            <FaAngleDown/>
          </div>
        )}
      </button>
      <button className={classes.btn_right} onClick={() => pageHandler('cart')}>
      <FaDollyFlatbed />
        Cart
      </button>
    </div>
  );
};

export default MainNavigation;