import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import heartIcon from '../Assets/heartIcon.png';
import heartIconFull from '../Assets/heartIconFull.png';
import { useDispatch, useSelector } from "react-redux";
import { saveFactToFavorites, removeFactFromFavoritesAsync, selectAllSavedFacts } from "../Redux/Reducers/savedFactsSlice";
import { useEffect, useState } from "react";

const FavoriteButton = ({ fact }) => {
    const allSavedFacts = useSelector(selectAllSavedFacts);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const handleAddToFavorites = () => {
        if (isFavorite) {
            setIsFavorite(false);
            dispatch(removeFactFromFavoritesAsync(fact));
        }
        else {
            setIsFavorite(true);
            dispatch(saveFactToFavorites(fact))
        }

    }

    useEffect(()=>{
        if(allSavedFacts && allSavedFacts.some(obj => obj.id === fact.id)){
            setIsFavorite(true);
        }
        else{
            setIsFavorite(false);
        }
    },[allSavedFacts]);

    return (
        <>
            <View style={styles.favButtonView}>
                <TouchableOpacity style={styles.favButton} onPress={() => handleAddToFavorites()} >
                    <Image style={styles.favButton} source={isFavorite ? heartIconFull : heartIcon}></Image>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    favButtonView: {
        alignItems: 'center',
        height:70,
        justifyContent:'flex-end'
    },
    favButton: {
        width:48,
        height:48
    },
})


export default FavoriteButton;