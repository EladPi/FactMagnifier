import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Modal, StyleSheet } from 'react-native';


const FadingAlert = ({ visible, message, onClose }) => {
    const [fadeAnim] = useState(new Animated.Value(0)); 

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();

        // Fade out after 0.5 second
        const timeout = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => onClose()); 
        }, 1500);

        // Clean up the timeout
        return () => clearTimeout(timeout);
    }, [visible]);

    if (!visible) return null;

    return (
        <Modal transparent={true} visible={visible}>
            <View style={styles.centeredView}>
                <Animated.View style={[styles.alertView, { opacity: fadeAnim }]}>
                    <Text style={styles.alertText}>{message}</Text>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    alertView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    alertText: {
        fontSize: 18,
        textAlign: "center"
    }
});


export default FadingAlert;

