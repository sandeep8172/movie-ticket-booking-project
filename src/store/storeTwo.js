import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Premium",
    amount: "",
    seat: "",
}
const premiumSlice = createSlice({
    name: "premium",
    initialState,
    reducers: {
        premiumTicket(state, action) {
            state.seat = state.seat + " " + state.name + "-" + action.payload + ","
            state.amount = +(state.amount + 310)
            state.isPressed = true;
        }
    }
})
export const premiumActions = premiumSlice.actions;
export default premiumSlice.reducer;