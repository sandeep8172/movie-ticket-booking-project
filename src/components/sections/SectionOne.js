import classes from "./SectionOne.module.css";
import { useDispatch } from "react-redux";
import { vipActions } from "../../store/storeOne";


const SectionOne = () => {
    const dispatch = useDispatch();

    const onClickHandler = (event) => {
        if (event.target.disabled === false) {
            event.target.className = classes.disabled;
            event.target.disabled = true;
        }
        let seatNo = event.target.innerHTML;
        dispatch(vipActions.vipTicket(seatNo))
    }

    return (
        <div className={classes.first}>
            Rs.600.00 VIP
            <hr />
            <section>
                {Array.from({ length: 20 }, (_, index) => (
                    <button onClick={onClickHandler} key={index} >
                        {index + 1}
                    </button>
                ))}
            </section>
        </div>
    )
}

export default SectionOne;