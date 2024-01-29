import { createSlice } from "@reduxjs/toolkit";
import decodeHTMLEntities from "../../Utils/decoding";


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
            const decodedSub=decodeHTMLEntities(action.payload.subcategory);
            const decodedFact=decodeHTMLEntities(action.payload.fact);
            const decodedDate= decodeHTMLEntities(action.payload.date);
            const decodedEvent= decodeHTMLEntities(action.payload.event);

            if(id && decodedFact){
                state.facts.push({...action.payload, subcategory:decodedSub,fact:decodedFact});
                state.isLoading=false;
                console.log("***************************went to decoded fact")
            }

            else if(id && decodedDate){
                state.facts.push({...action.payload, date:decodedDate,evemt:decodedEvent});
                state.isLoading=false;
                console.log("*****************************went to decoded date");
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
