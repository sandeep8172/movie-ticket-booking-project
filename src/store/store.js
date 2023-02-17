import { configureStore } from "@reduxjs/toolkit";
import vipSlice from "./storeOne";
import premiumSclice from "./storeTwo";
import executiveSlice from "./storeThree";

const store = configureStore({
    reducer: {
        vip: vipSlice,
        premium: premiumSclice,
        executive: executiveSlice
    }
}
);

export default store;