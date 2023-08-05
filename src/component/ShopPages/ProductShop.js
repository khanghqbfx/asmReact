import React, { useEffect, useState } from 'react'
import classes from './ProductShop.module.css';
import { Link } from 'react-router-dom';



const ProductsShop = () => {
  const [productShop, setProductShop] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
      .then(response => response.json())
      .then(data => setProductShop(data));
      
  }, []);

  const filterProductHandler = () => {
    if (category === 'all') {
      return productShop;
    } else {
      return productShop.filter(product => product.category === category);
    }

  };
  
  
  const handlerCategoryClick = (selected) => {
    setCategory(selected);
    console.log(selected);
  };


  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <h3>CATEGORIES</h3>
        <ul>
          <h4>APPLE</h4>
          <p onClick={() => handlerCategoryClick("all")}>All</p>
          <li>
            <h5>IPHONE & MAC</h5>
            <p onClick={() => handlerCategoryClick('iphone')}>Iphone</p>
            <p onClick={() => handlerCategoryClick('ipad')}>Ipad</p>
            <p onClick={() => handlerCategoryClick('macbook')}>Macbook</p>
          </li>
          <li>
            <h5>WIRELESS</h5>
            <p onClick={() => handlerCategoryClick('airpod')}>Airpods</p>
            <p onClick={() => handlerCategoryClick('watch')}>Watch</p>
          </li>
          <li>
            <h5>OTHER</h5>
            <p onClick={()=> handlerCategoryClick('mouse')}>Mouse</p>
            <p>Keyboard</p>
            <p>Other</p>
          </li>
        </ul>
      </div>
      <div className={classes.product}>
        <div className={classes.finding_query}>
          <input type="text" placeholder='Enter Search Here!' />
          <select id="sort" name="sort">
            <option value="default">Default sorting</option>
          </select>
        </div>
        <div className={classes.title}>
          {filterProductHandler().map(product => (
            <div key={product.id}>
              <img src={product.img1}  alt ={product.name} className={classes.img} />
              <Link to={`/detail/${product._id.$oid}`} className={classes.link}>{product.name}</Link>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <div className={classes.move_page}>
          <div className={classes.btn}>
            <button><i className="fa-solid fa-backward"></i></button>
            <span>1</span>
            <button><i className="fa-solid fa-forward"></i></button>
          </div>
          <p><i>Showing 1-9 of 9 results</i></p>
        </div>
      </div>
  
    </div>
  
  );
 
}

export default ProductsShop;