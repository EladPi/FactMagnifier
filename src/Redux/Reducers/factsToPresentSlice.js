import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    facts:[],
    isLoading:true
};

export const factsToPresentSlice = createSlice ({
    name: 'factsToPresent',
    initialState,
    reducers:{
        addFact: (state , action) =>{
            const {id}=action.payload;
            if(id){
                state.facts.push(action.payload);
                state.isLoading=false;
            }
        },
        removeFact: (state, action) =>{
            const {id} = action.payload;
            delete state.facts[id];
        },
        clearFacts: (state) => {
            return initialState;
        }
    }
})

export const selectFactById = (state, id) => state.factsToPresent.facts[id];
export const selectAllFacts = (state) => state.factsToPresent.facts;
export const selectIsLoading = (state) => state.factsToPresent.isLoading;


export const {addFact,removeFact, clearFacts} = factsToPresentSlice.actions;

export default factsToPresentSlice.reducer;
