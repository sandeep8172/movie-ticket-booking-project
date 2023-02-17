import classes from "./CheckoutButton.module.css";
import { NavLink } from "react-router-dom";

const CheckoutButton = () => {
    return (
        <div className={classes.book}>
            <NavLink to="/booking/checkout">
                <button >Checkout</button>
            </NavLink>
        </div>
    )
}
export default CheckoutButton;