import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler';

const CategoriesMealsScreen = props => {

    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );

    }


    const catId = props.navigation.getParam('categoryId');

    // Filter meals that have at least 1 matching category if of what the user selected
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList 
            keyExtractor={(item,index) => item.id}
            data={displayedMeals}
            renderItem={renderMealItem} />
        </View>
    );
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;