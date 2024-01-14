import React, { useState, useRef } from 'react';
import { TextInput, Animated, StyleSheet } from 'react-native';

const SearchBar = ({setSearchInput }) => {
    const animatedWidth = useRef(new Animated.Value(0.3)).current;

    const handleFocus = () => {
        Animated.timing(animatedWidth, {
            toValue: 0.8,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        Animated.timing(animatedWidth, {
            toValue: 0.3,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    return (
        <Animated.View style={[styles.inputContainer, {
            width: animatedWidth.interpolate({
                inputRange: [0.3, 0.8],
                outputRange: ['30%', '80%']
            })
        }]}>
            <TextInput
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Search"
                onChangeText={(text)=> setSearchInput(text)}
            />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        borderRadius:15,
        textAlign:'center'
    },
});

export default SearchBar;
