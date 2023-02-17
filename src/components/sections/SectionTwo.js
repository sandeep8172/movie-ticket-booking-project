import classes from "./SectionTwo.module.css";
import { premiumActions } from "../../store/storeTwo";
import { useDispatch } from "react-redux";

const SectionTwo = () => {
    const dispatch = useDispatch();

    const onClickHandler = (event) => {
        if (event.target.disabled === false) {
            event.target.className = classes.disabled;
            event.target.disabled = true;
        }
        const seatNo = event.target.innerHTML;
        dispatch(premiumActions.premiumTicket(seatNo));
    }

    return (
        <div className={classes.second}>
            Rs.310.00 PREMIUM
            <hr />
            <section>
                {Array.from({ length: 24 }, (_, index) => (
                    <button onClick={onClickHandler} key={index} >
                        {index + 1}
                    </button>
                ))}
            </section>
        </div>
    )
}

export default SectionTwo;