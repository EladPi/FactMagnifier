import { createSlice } from "@reduxjs/toolkit";


const initialState={
};

export const notificationFactSlice = createSlice ({
    name: 'notificationFact',
    initialState,
    reducers:{
        setNotificationFact: (state , action) =>{
            state=action.payload;
        },
        removeNotificationFact: (state) =>{
            state = initialState;
        },
    }
})

export const selectNotificationFact = (state) => state.notificationFact;


export const {setNotificationFact,removeNotificationFact} = notificationFactSlice.actions;

export default notificationFactSlice.reducer;