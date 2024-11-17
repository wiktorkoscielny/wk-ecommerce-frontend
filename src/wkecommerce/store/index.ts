import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import {InitialState} from "./types";                         

const initialState: InitialState = {};

const WkEcommerceSlice = createSlice({
    name: "wkEcommerce",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

export const store = configureStore({
    reducer: {
        youtubeApp: WkEcommerceSlice.reducer,
    },
});

export const {} = WkEcommerceSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;