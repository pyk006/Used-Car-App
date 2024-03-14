import { configureStore, createSlice } from '@reduxjs/toolkit'
import selectedCardReducer from './features/selectedCardSlice';
const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: [],
  reducers: {
    setSearchResults: (state, action) => action.payload,
  }
});

export const { setSearchResults } = searchResultsSlice.actions;

export const store = configureStore({
  reducer: {
    searchResults: searchResultsSlice.reducer,
    selectedCard: selectedCardReducer
  }
})