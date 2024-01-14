import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import SingleCategory from "./SingleCategory";
import { useState } from "react";
import { imageSource } from "../Utils/imageSources";

const CategoriesContainer = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        if (category === selectedCategory) {
            setSelectedCategory('');
        }
        else {
            setSelectedCategory(category);
        }
    };


    return (
        <>
            <SafeAreaView style={{backgroundColor:'aliceblue'}}>
                <ScrollView style={styles.categoriesContainer} contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', }}>
                    {Object.entries(imageSource).map(([category, details]) => (
                        <SingleCategory
                            key={category}
                            category={category}
                            imgSrc={details.img}
                            isSelected={selectedCategory === category}
                            onSelect={handleCategorySelect}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    categoriesContainer: {
        paddingHorizontal: 20,
        flexDirection:"column",
        columnGap:20
    },
})

export default CategoriesContainer;

