import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import checked from '../Assets/checked.png';
import { addCategory, removeCategory } from "../Redux/Reducers/categoriesSlice";
import { useDispatch,  } from "react-redux";
import { backgroundColors } from "../Utils/backgroundColors";
import FadingAlert from "./FadingAlert";


const SingleCategory = ({ category, imgSrc, isSelected, onSelect }) => {
    const dispatch = useDispatch();
    const [alertVisible, setAlertVisible] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const message = 'Your facts changed!'

    useEffect(() => {
        const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
        setBackgroundColor(randomColor);
    }, [])

    const handleOnPress = () => {
        setAlertVisible(true);
        onSelect(category);
        if (!isSelected) {
            dispatch(addCategory(category));
        } else {
            dispatch(removeCategory(category));
        }
    };




    return (
        <TouchableOpacity style={[styles.touchable, { backgroundColor: backgroundColor }, isSelected && styles.selected]} onPress={handleOnPress}>
            <View style={styles.container}>
                <View style={styles.textAndCheckedBoxContainer}>
                    <View style={[styles.textView, { backgroundColor: backgroundColor }, isSelected && styles.selected]}>
                        <Text style={styles.text} >{category}</Text>
                    </View>
                    {isSelected ? <Image style={styles.checked} source={checked} /> : <View style={styles.unCheckedView}></View>}
                </View>
                {imgSrc ?
                    <Image style={styles.img} borderTopRightRadius={20} borderBottomRightRadius={20} source={imgSrc} />
                    :
                    <ActivityIndicator size="large" />
                }
                {alertVisible && <FadingAlert visible={alertVisible} message={message} onClose={() => setAlertVisible(false)} />
                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        columnGap: 10,
    },
    touchable: {
        width: '95%',
        height: 170,
        margin: 10,
        borderColor: '#ccc',
        borderRadius: 20,
        backgroundColor: '#3ea4f7',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    selected: {
        backgroundColor: '#71d172',
    },
    textAndCheckedBoxContainer: {
        alignItems: 'center',
        paddingLeft: 10,
        width: '35%'

    },
    img: {
        width: '62%',
        height: 170,
    },
    textView: {
        width: '100%',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
    },
    checked: {
        marginTop: 50,
        width: 34,
        height: 34,
        borderWidth: 0.5,
        borderRadius: 50,
    },
    unCheckedView: {
        width: 34,
        height: 34,
        backgroundColor: 'aliceblue',
        borderRadius: 50,
        marginTop: 50,
        borderWidth: 0.5,
    }
});

export default React.memo(SingleCategory);