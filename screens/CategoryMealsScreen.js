import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText';

const CategoriesMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    // Get the available meals from central store
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    // Filter meals that have at least 1 matching category if of what the user selected
    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        );
    }

    // Forward navigation prop to access from child
    return <MealList listData={displayedMeals} navigation={props.navigation}/>;
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerBackTitle: 'Categories',
        headerTruncatedBackTitle: 'Back',
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default CategoriesMealsScreen;