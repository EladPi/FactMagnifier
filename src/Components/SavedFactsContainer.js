import { Dimensions, View, ScrollView, Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllSavedFacts, selectSearchFacts } from "../Redux/Reducers/savedFactsSlice";
import { useDispatch } from "react-redux";
import close from '../Assets/close.png'
import trash from '../Assets/trash.png'
import SearchBar from "./SearchBar";
import { Animated } from 'react-native';
import emptyListIcon from '../Assets/emptylisticon.png';
import { useNavigation } from "@react-navigation/native";
import { removeFactFromFavoritesAsync } from "../Redux/Reducers/savedFactsSlice";

const SavedFactsContainer = () => {
    const [searchInput, setSearchInput] = useState('');
    const allSavedFactsBySearch = useSelector(state => selectSearchFacts(state, searchInput));
    const allSavedFacts = useSelector(selectAllSavedFacts);
    const [selectedFact, setSelectedFact] = useState();
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [fadeAnim] = useState(new Animated.Value(1));


    const handleFactPress = (fact) => {
        setSelectedFact(fact);
    }


    useEffect(() => {
        if(selectedFact){
            fadeIn();
        }
    }, [selectedFact])


    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300, 
            useNativeDriver: true,
        }).start();
    };

    const fadeOutExit = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setSelectedFact(null);
        });
    };

    const fadeOutDelete = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            dispatch(removeFactFromFavoritesAsync(selectedFact));
            setSelectedFact(null);
        });
    };



    return (
        <>
            <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', rowGap: 30 }}>
                <SearchBar setSearchInput={setSearchInput} />
                {allSavedFacts.length <= 0 ?
                    <View style={styles.noSavedView}>
                        <Image style={{ width: 60, height: 60 }} borderRadius={20} source={emptyListIcon} />
                        <Text style={styles.noSavedViewText}>Currently you dont have any saved facts.</Text>
                        <Text style={styles.noSavedViewTextSmall}>Explore the app and add some interesting facts into your list!</Text>
                        <TouchableOpacity style={styles.startExploringButton} onPress={() => nav.navigate('Facts')}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'aliceblue' }}>Start Exploring!</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <>
                        {allSavedFactsBySearch.map(obj => (
                            <TouchableOpacity key={obj.id} style={styles.factContainer} onPress={() => handleFactPress(obj)} disabled={selectedFact}>
                                <Text style={styles.categoryText}>{obj.category || 'Today in History'}</Text>
                                <Text style={styles.subCategoryText}>{obj.subcategory || `${obj.day} / ${obj.month} / ${obj.year}`}</Text>
                            </TouchableOpacity>
                        ))}
                    </>
                }
            </ScrollView>
            {selectedFact &&
                <Animated.View style={[styles.factView, {opacity:fadeAnim}]}>
                    <TouchableOpacity onPress={fadeOutExit} style={{ position: 'absolute', left: 10, top: 10 }}>
                        <Image source={close} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fadeOutDelete} style={{ position: 'absolute', right: 10, top: 10 }}>
                        <Image source={trash} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Text style={styles.factViewSubCategoryText}>{selectedFact.subcategory || `${selectedFact.day} / ${selectedFact.month} / ${selectedFact.year}`}</Text>
                    <Text style={styles.factViewFactText}>{selectedFact.fact || selectedFact.event}</Text>
                </Animated.View>
            }

        </>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 20,

    },
    factContainer: {
        width: 300,
        height: 100,
        borderWidth: 1,
        minWidth: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20',
        borderColor: '#3ea4f7',
    },
    categoryText: {
        fontSize: 17,
    },
    subCategoryText: {
        fontSize: 23,
        fontWeight: '500'
    },
    factView: {
        position: 'absolute',
        width: 400, 
        height: 600,  
        top: height / 2 - 300, 
        left: width / 2 - 200, 
        backgroundColor: '#3ea4f7',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    factViewSubCategoryText: {
        fontSize: 25,
        fontWeight: '500',
    },
    factViewFactText: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    searchBar: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderColor: 'darkgray',
        borderRadius: 20,
        padding: 20,

    },
    noSavedView: {
        width: '80%',
        backgroundColor: 'transparent',

        borderRadius: 18,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    },
    noSavedViewText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
    },
    noSavedViewTextSmall: {
        fontSize: 13,
        textAlign: 'center',
        padding: 10,
    },
    startExploringButton: {
        padding: 10,
        borderRadius: 18,
        backgroundColor: '#3ea4f7',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    }
})

export default SavedFactsContainer;