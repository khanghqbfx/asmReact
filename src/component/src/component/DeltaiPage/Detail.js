import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  classes from './Detail.module.css'
import {FaAngleLeft ,FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { listCartActions } from '../../store/cart';



const Detail = () => {
  const { id } = useParams();
  
  const [text ,setText] = useState(1);
  
  const onChangeText = (e) => {
    setText(e.target.value)
    console.log(text)
  }

  const [itemData, setItemData] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //state  của cart
  const cartItem =  useSelector((state)=>state.cart.listCart) || [];
  const dispatch = useDispatch();


  const addToHanler = () => {
    const item = {
      ...itemData, 
      quantity: parseInt(text) || 1,
      totalPrice : itemData.price * parseInt(text),
    }
    if(cartItem.length === 0  || cartItem.filter((el) => el._id === item._id)) {
      dispatch(listCartActions.ADD_CART(item));
    }else {
       const  index =  cartItem.indexOf(
        cartItem.filter((e)=>e._id=== itemData[0]._id)[0 ]
       );
       dispatch(listCartActions.UPDATE_CART(index , item))
    }
    
  };



  //tăng thêm giá trị lên 1 đơn vị
    const Uptext = () => {
       const value  = parseInt(text) + 1
       setText(value)
    }

    //giảm giá trị đi 1   đơn vị
     const downText = () => {
      const value = parseInt(text) - 1 ;

      if (value === 0) return;
       
      setText(value)
     }

     



  // lấy dữ liệu API
  useEffect(() => {
    setLoading(true);
    setError(null);
  
    fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
      .then(response => response.json())
      .then(data => {
          setItemData(data)
         

          // lọc và chon ra 1  sản phẩm bằng với id  từ chuyển từ shop sang detail
            const productData = data.find(item => item._id.$oid === id);
            setItemData(productData);
            console.log(productData)
          
          // lọc ra tất cả các sản phẩm nó category dùng tên với nó
        
            const filteredRelatedProducts = data.filter(item => item._id.$oid === id);
            setRelatedProducts(filteredRelatedProducts);
          

          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          console.log(error);
        });
    }, [id]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!itemData) {
      return <div>Product not found.</div>;
    }

    // sữ lý acc sản phẩm qua trang cart

    
    return (
      <div>
        <div>
          {itemData && (
            <div>
              <div key={itemData.id} className={classes.container}>
                <div className={classes.img}>
                  <img src={itemData.img1} alt={itemData.name} />
                  <img src={itemData.img2} alt={itemData.name} />
                  <img src={itemData.img3} alt={itemData.name} />
                  <img src={itemData.img4} alt={itemData.name} />
                </div>

                <img
                  src={itemData.img1}
                  alt={itemData.name}
                  className={classes.imgtitle}
                />

                <div className={classes.title}>
                  <h2>{itemData.name}</h2>
                  <p>{itemData.description}</p>
                  <p>Price: {itemData.price}</p>
                  <p>{itemData.short_desc}</p>
                  <h3>CATEGORIES : {itemData.category} </h3>

                  <div className={classes.button}>
                    <div className={classes.text}>
                      <span className={classes.quantyti}>Quantity</span>

                      <button onClick={downText}>
                        <FaAngleLeft />
                      </button>
                      <input
                        type="text"
                        value={text}
                        onChange={onChangeText}
                      ></input>
                      <button onClick={Uptext}>
                        <FaAngleRight />
                      </button>
                    </div>
                    <div>
                      <span onClick={addToHanler} className={classes.add}>
                        ADD TO CART
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.description}>
                <button>DESCRIPTION</button>
                <h3>Product DESCRIPTION</h3>
                <p>{itemData.long_desc}</p>
              </div>
            </div>
          )}
        </div>
        <h3 className={classes.related}>Related Products:</h3>
        {relatedProducts.length > 0 ? (
          relatedProducts.map((relatedProduct) => (
            <div>
              <div key={relatedProduct.id} className={classes.relatedProd}>
                <img src={relatedProduct.img1} alt={relatedProduct.name} />
                <img src={relatedProduct.img2} alt={relatedProduct.name} />
                <img src={relatedProduct.img3} alt={relatedProduct.name} />
                <img src={relatedProduct.img4} alt={relatedProduct.name} />
              </div>

            
            </div>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    );
  };

  export default Detail;