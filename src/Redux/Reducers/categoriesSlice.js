import { createSlice } from "@reduxjs/toolkit";


const initialState= '';

export const categoriesSlice = createSlice ({
    name: 'categories',
    initialState,
    reducers:{
        addCategory: (state , action) =>{
            return action.payload
        },
        removeCategory: (state) =>{
            return initialState;
        },
    }
})

export const selectCategory = (state) => state.categories;


export const {addCategory,removeCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;