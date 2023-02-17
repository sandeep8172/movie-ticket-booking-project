import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Vip",
    amount: "",
    seat: "",
    movieName: "",
}
const vipSlice = createSlice({
    name: "vip",
    initialState,
    reducers: {
        vipTicket(state, action) {
            state.seat = state.seat + " " + state.name + "-" + action.payload + ",";
            state.amount = +(state.amount + 600);
        },
        updateName(state, action) {
            state.movieName = action.payload;
        }
    }
})
export const vipActions = vipSlice.actions;
export default vipSlice.reducer;