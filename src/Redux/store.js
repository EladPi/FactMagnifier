import { configureStore } from "@reduxjs/toolkit";
import savedFactsReducer from './Reducers/savedFactsSlice';
import factsToPresentReducer from "./Reducers/factsToPresentSlice";
import categoriesReducer  from "./Reducers/categoriesSlice";
import notificationFactReducer from "./Reducers/notificationFactSlice";

export const store = configureStore({
    reducer: {
        factsToPresent: factsToPresentReducer,
        savedFacts: savedFactsReducer,
        categories: categoriesReducer,
        notificationFact: notificationFactReducer,
    }
});