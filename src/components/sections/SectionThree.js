import classes from "./SectionThree.module.css";
import { executiveActions } from "../../store/storeThree";
import { useDispatch } from "react-redux";

const SectionThree = () => {
    const dispatch = useDispatch();
    const onClickHandler = (event) => {
        if (event.target.disabled === false) {
            event.target.className = classes.disabled;
            event.target.disabled = true;
        }
        const seatNo = event.target.innerHTML;
        dispatch(executiveActions.executiveTicket(seatNo));
    }


    return (
        <div className={classes.third}>
            Rs.260.00 EXECUTIVE
            <hr />
            <section>
                {Array.from({ length: 28 }, (_, index) => (
                    <button onClick={onClickHandler} key={index} >
                        {index + 1}
                    </button>
                ))}
            </section>
        </div>
    )
}

export default SectionThree;