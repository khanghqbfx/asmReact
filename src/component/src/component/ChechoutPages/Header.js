import classes from "./header.module.css"

const HeaderCheckuot = () => {
        return(
        <div className={classes.title}>
            <div className={classes.home}>
                <h2>Checkout</h2>
                <div className= {classes.name}>
                <span>Home/Cart/</span>
                <span className={classes.div}>Checkout</span>
                </div>
               
            </div>
        </div>

        )
}

export default HeaderCheckuot