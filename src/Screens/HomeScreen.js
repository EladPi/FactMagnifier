import {View, StyleSheet } from "react-native";
import FactContainer from "../Components/FactContainer";
import { useState, useEffect } from "react";
import useNotificationResponse from "../Utils/useNotificationResponse";
import { loadSavedFacts } from "../Redux/Reducers/savedFactsSlice";
import { useDispatch } from "react-redux";

const HomeScreen = ({ navigation }) => {
    const dispatch= useDispatch();

    useNotificationResponse();

    useEffect(() => {
        dispatch(loadSavedFacts());
    }, [dispatch]);
    
    return (
        <View style={styles.container}>
            <FactContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'aliceblue'
        
    },
});


export default HomeScreen;