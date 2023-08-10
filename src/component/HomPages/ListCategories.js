import React from "react";
import classes from "./ListCategories.module.css";
import { Link } from "react-router-dom";
import img2 from '../../img/product_1.png';
import img3 from '../../img/product_2.png';
import img4 from '../../img/product_3.png' ;
import img5 from '../../img/product_4.png';
import img6 from '../../img/product_5.png';


const ListCategories = () => {
  return (
    <section className={classes.categories}>
      <p className={classes.sub_head}>
        <i>CAREFULLY CREATED COLLECTIONS</i>
      </p>
      <h2 className={classes.heading}>
        <i>BROWSE OUR CATEGORIES</i>
      </h2>
      <menu className={classes.menu}>
        <Link to="/shop?type=iphone" className={`${classes.iphone} ${classes.hover}`}>
          <img src={img2} alt="iphone" width="100%" />
        </Link>
        <Link to="/shop?type=mac" className={`${classes.mac} ${classes.hover}`}>
          <img src={img3} alt="mac" width="100%" />
        </Link>
        <Link to="/shop?type=ipad" className={`${classes.ipad} ${classes.hover}`}>
          <img src={img4} alt="ipad" width="100%" />
        </Link>
        <Link to="/shop?type=watch" className={`${classes.watch} ${classes.hover}`}>
          <img src={img5} alt="watch" width="100%" />
        </Link>
        <Link to="/shop?type=airpod" className={`${classes.airpods} ${classes.hover}`}>
          <img src={img6} alt="airpods" width="100%" />
        </Link>
      </menu>
    </section>
  );
};

export default ListCategories;