import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'

const defaultStackNavOptions = {
    headerBackAllowFontScaling: true,
    backgroundColor: 'white',
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.primaryColor
    },
    headerTintColor:
        Platform.OS === 'ios' ? Colors.primaryColor : 'white',
};

// Create stack navigator
// pass which screens to move between
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

// Just made this a stack so we get a header
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'My Favorites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accentColor
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });


const MainNavigator = createDrawerNavigator({
    MealsFavs: MealsFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);