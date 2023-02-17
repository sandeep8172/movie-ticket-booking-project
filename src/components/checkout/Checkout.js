import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Checkout = () => {

    const history = useHistory();

    const vipAmount = useSelector((state) => state.vip.amount);
    const vipSeat = useSelector((state) => state.vip.seat);
    const premiumAmount = useSelector((state) => state.premium.amount);
    const premiumSeat = useSelector((state) => state.premium.seat);
    const executiveAmount = useSelector((state) => state.executive.amount);
    const executivemSeat = useSelector((state) => state.executive.seat);
    const movieName = useSelector((state) => state.vip.movieName);

    const onClickHandler = () => {
        alert("Your Ticket Has Successfully Booked," + " Enjoy The Movie.")
    }
    return (
        <div className={classes.checkout}>
            <NavLink to="/booking">
                <button className={classes.back}>Go back</button>
            </NavLink>
            <main>
                <h2>Your Booking Details</h2>
                <h3>{movieName}</h3>
                <p><span>Seat No. : </span> {vipSeat}{premiumSeat}{executivemSeat} </p>
                <p><span>total amount :</span> {vipAmount} {premiumAmount} {executiveAmount} = Rs.{vipAmount + premiumAmount + executiveAmount}</p>
                <button onClick={onClickHandler}>Book Now</button>
            </main>
        </div>

    )
}

export default Checkout;