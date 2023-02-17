import classes from "./HomePage.module.css";
import MoviesData from "../../store/MoviesData";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { vipActions } from "../../store/storeOne";

const HomePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const movieClickHandler = (movieName) => {
        history.push("/booking")
        dispatch(vipActions.updateName(movieName));
    }


    const movieCards = MoviesData.map((item, index) => {
        return (
            <div onClick={() => movieClickHandler(item.Title)} key={index}>
                <img src={item.Poster} />
                <h4>{item.Title}</h4>
                <p>{item.Released}</p>

            </div>
        )
    })

    return (
        <main className={classes.cards}>
            {movieCards}
        </main>
    )
}

export default HomePage;