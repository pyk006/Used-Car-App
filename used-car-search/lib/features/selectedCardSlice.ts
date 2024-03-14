"use client"
import { createSlice } from "@reduxjs/toolkit"

const selectedCardSlice = createSlice({
    name: "selectedCard",
    initialState: null,
    reducers: {
        setSelectedCard: (state, action) => action.payload,
    },
});

export const { setSelectedCard } = selectedCardSlice.actions;
export default selectedCardSlice.reducer;