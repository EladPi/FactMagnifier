import { View, ActivityIndicator, Text, ScrollView, StyleSheet, Dimensions, Image } from "react-native"
import { selectAllFacts, clearFacts, addFact, selectIsLoading } from "../Redux/Reducers/factsToPresentSlice";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "./FavoriteButton";
import { fetchRandomFacts, fetchFactsByCategory, fetchTodayInHistory } from "../API/api";
import { useEffect, useState } from "react";
import { selectCategory } from "../Redux/Reducers/categoriesSlice";
import sadEmoji from '../Assets/sadEmoji.png'
import NetInfo from '@react-native-community/netinfo';


const FactContainer = () => {
    const [isConnected, setIsConnected] = useState(true);
    const facts = useSelector(selectAllFacts);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const selectedCategory = useSelector(selectCategory);
    const [lastFetchScrollPosition, setLastFetchScrollPosition] = useState(0);


    async function initialFactGenerator() {
        setIsConnected(true);
        let result;
        let resultTwo;
        try {
            if (selectedCategory) {
                if (selectedCategory == 'Today In History') {
                    result = await fetchTodayInHistory();
                    resultTwo = await fetchTodayInHistory();
                }
                else {
                    result = await fetchFactsByCategory(selectedCategory);
                    resultTwo = await fetchFactsByCategory(selectedCategory);
                }
            }
            else {
                result = await fetchRandomFacts();
                resultTwo = await fetchRandomFacts();
            }

            if (result.contents) {
                dispatch(addFact(result.contents));
                dispatch(addFact(resultTwo.contents));
            } else {
                return;
            }
        } catch (error) {
            setIsConnected(false);
            console.error("Error fetching a random fact1:", error);
        }
    }


    useEffect(() => {
        initialFactGenerator();
    }, [])

    const newFactGenerator = async () => {
        setIsConnected(true);
        let result;
        try {
            if (selectedCategory) {
                if (selectedCategory == 'Today In History') {
                    result = await fetchTodayInHistory();
                }
                else {
                    result = await fetchFactsByCategory(selectedCategory);
                }
            }
            else {
                result = await fetchRandomFacts();
            }

            if (result.contents) {
                dispatch(addFact(result.contents));
            } else {
                return;
            }
        } catch (error) {
            setIsConnected(false);
            console.error("Error fetching a random fact2 :", error);
        }
    }



    useEffect(() => {
        const restart = async () => {
            dispatch(clearFacts());
            setLastFetchScrollPosition(0);
            await initialFactGenerator();
        }
        restart();
    }, [selectedCategory])


    //use effect to check if the user is connected to the internet
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        // Check the connection on component mount
        NetInfo.fetch().then(state => {
            setIsConnected(state.isConnected);
        });

        // Unsubscribe to the listener when the component unmounts
        return () => unsubscribe();
    }, []);




    // Handler for when the user scrolls to the top
    const handleScroll = async ({ nativeEvent }) => {
        const currentOffsetY = nativeEvent.contentOffset.y;
        const scrolledDistance = currentOffsetY - lastFetchScrollPosition;

        // Only fetch new fact if scrolled more than a certain distance
        if (scrolledDistance >= 300) {
            await newFactGenerator(); // Load new fact
            setLastFetchScrollPosition(currentOffsetY); // Update last fetch position
        }
    };



    return (
        <>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                pagingEnabled={true}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onMomentumScrollEnd={handleScroll}
            >
                {isConnected ?
                    facts != null && isLoading === false
                        ? facts.map((fact, index) =>
                            <View key={index} style={styles.factContainer}>
                                <View style={styles.innerFactContainer}>
                                    <Text style={styles.categoryText}>{fact.category || 'Today In History'}</Text>
                                    <Text style={styles.subCategoryText}>{fact.subcategory || `${fact.day} / ${fact.month} / ${fact.year}`}</Text>
                                    <Text style={styles.factText}>{fact.fact || fact.event}</Text>
                                    <FavoriteButton fact={fact} />
                                </View>
                            </View>
                        )
                        :
                        <View style={styles.factContainer}>
                            <ActivityIndicator size="large" color='#3ea4f7' />
                        </View>
                    :
                    <View style={styles.factContainer}>
                        <Image style={styles.errorImg} source={sadEmoji} />
                        <Text style={styles.errorText}>An unexpected problem occured. Please check your internet connection or try again later!</Text>
                    </View>



                }
            </ScrollView>
        </>
    )
}

const screenHeight = Dimensions.get('window').height;  // Total screen height
const tabBarHeight = 90;  // height of the tab bar.
const usableHeight = screenHeight - tabBarHeight;  // Usable screen height


const styles = StyleSheet.create({
    scrollViewContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    factContainer: {
        height: usableHeight,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    innerFactContainer: {
        paddingTop: 50,
        paddingBottom: 50,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: '#3ea4f7',
        alignItems: 'center'

    },
    categoryText: {
        position: 'absolute',
        top: 5,
        color: 'gray'
    },
    subCategoryText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#3ea4f7',
        padding: 20,
        borderRadius: 10
    },
    factText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
        fontWeight: '500',
        letterSpacing: 0.7
    },
    errorImg: {
        width: 74,
        height: 74,

    },
    errorText: {
        textAlign: "center",
        width: 200,
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.8

    },
})

export default FactContainer;

