import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FavoriteButton from "../Components/FavoriteButton";
import { useNavigation } from "@react-navigation/native";

const NotificationFactScreen = ({ route }) => {
    const { fact } = route.params;
    const nav = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.category}>{fact.category}</Text>
                    <Text style={styles.didYouKnowThat}>Did you know that...</Text>
                    <View style={styles.subCategoryAndDescriptionView}>
                        <Text style={styles.subCategory}>{fact.subcategory}</Text>
                        <Text style={styles.fact}>{fact.fact}</Text>
                        <FavoriteButton fact={fact} />
                    </View>
                    <TouchableOpacity onPress={()=>nav.navigate('Facts')} style={styles.touchable}>
                        <Text style={styles.touchableText}>Keep Exploring!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ea4f7',
    },
    subContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'black',
        width: '90%',
        height: '80%',
        backgroundColor: 'aliceblue',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    category: {
        position: 'absolute',
        top: 0,
        color: 'darkgray',
        fontSize: 12

    },
    didYouKnowThat: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 0.5


    },
    subCategory: {
        fontSize: 20,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#3ea4f7',
        padding: 10,
        borderRadius: 10,
        letterSpacing: 1

    },
    fact: {
        marginTop: 15,
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 0.5,
        fontWeight: '400'
    },
    subCategoryAndDescriptionView: {
        alignItems: 'center',
        height: '50%',
        width: '100%',
        padding: 10,
    },
    touchable: {
        padding: 10,
        borderRadius: 18,
        backgroundColor: '#3ea4f7',
    },
    touchableText: {
        fontSize: 17,
        fontWeight: "bold",
        color: 'aliceblue',
        letterSpacing: 0.5
    },
})

export default NotificationFactScreen;