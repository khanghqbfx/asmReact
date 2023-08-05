import  classes from './Checkuot.module.css';
import {useSelector}from 'react-redux'




const Checkout = () => {
    //State của cart list
    const cartList = useSelector((state) => state.cart.listCart) || [];
  
    //Function format thành tiền tệ
    const formatter = new Intl.NumberFormat();
    return (
      <>
      
        <div className={classes.checkout}>
          <div className={classes.checkout_banner}>
            <header>CART</header>
            <p>
              <b>HOME / CART /</b> CHECKOUT
            </p>
          </div>
          <h1>BILLING DETAIL</h1>
          <form className={classes.checkout_form}>
            <label>FULL NAME:</label>
            <input placeholder='Enter Your Full Name Here!' />
            <label>EMAIL:</label>
            <input placeholder='Enter Your Email Here!' />
            <label>PHONE NUMBER:</label>
            <input placeholder='Enter Your Phone Number Here!' />
            <label>ADDRESS:</label>
            <input placeholder='Enter Your Address Here!' />
            <button>Place order</button>
          </form>
          <div className={classes.checkout_total}>
            <h2>YOUR ORDER</h2>
            {cartList.map((item) => {
              return (
                <span key={item._id.$oid}>
                  <h3>{item.name}</h3>
                  <p>
                    {`${formatter.format(item.price)} VND x
                    ${item.quantyti}`}
                  </p>
                  <hr></hr>
                </span>
              );
            })}
            <h3>TOTAL</h3>
            <p id={classes.price_total}>
              {formatter.format(
                cartList.reduce((prev, cur) => {
                  return prev + cur.totalPrice;
                }, 0)
              )}{' '}
              VND
            </p>
          </div>
        </div>
       
      </>
    );
  };
  
  export default Checkout