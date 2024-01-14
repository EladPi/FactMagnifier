import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadSavedFacts = () => async (dispatch) => {
    try {
        const savedFactsString = await AsyncStorage.getItem('savedFacts');
        if (savedFactsString !== null) {
            const savedFacts = JSON.parse(savedFactsString);
            dispatch(setSavedFacts(savedFacts));
        }
    } catch (error) {
        console.error('Failed to load saved facts:', error);
    }
};


export const saveFactToFavorites = (fact) => async (dispatch, getState) => {
    dispatch(addFactToFavorites(fact));
    try {
        const savedFacts = JSON.stringify(getState().savedFacts);
        await AsyncStorage.setItem('savedFacts', savedFacts);
    } catch (error) {
        console.error('Failed to save fact:', error);
    }
};

export const removeFactFromFavoritesAsync = (fact) => async (dispatch, getState) => {
    dispatch(removeFactFromFavorites(fact));
    try {
        const savedFacts = JSON.stringify(getState().savedFacts);
        await AsyncStorage.setItem('savedFacts', savedFacts);
    } catch (error) {
        console.error('Failed to remove fact:', error);
    }
};


const initialState = [];

export const savedFactsSlice = createSlice({
    name: 'savedFacts',
    initialState,
    reducers: {
        addFactToFavorites: (state, action) => {
            state.push(action.payload);
        },
        setSavedFacts: (state, action) => {
            return action.payload;
        },
        removeFactFromFavorites: (state, action) => {
            const index = state.findIndex(fact => fact.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})


export const selectAllSavedFacts = (state) => state.savedFacts;

export const selectSearchFacts = (state, input) => {
    if (input) {
        const lowerInput = input.toLowerCase();
        return state.savedFacts.filter(obj => obj.subcategory.toLowerCase().includes(lowerInput));
    }
    else{
        return state.savedFacts
    }
};

export const { addFactToFavorites,setSavedFacts ,removeFactFromFavorites } = savedFactsSlice.actions;

export default savedFactsSlice.reducer;