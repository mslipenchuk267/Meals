import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler';

import MealList from '../components/MealList'

const CategoriesMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    // Filter meals that have at least 1 matching category if of what the user selected
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    // Forward navigatin prop to access from child
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

export default CategoriesMealsScreen;