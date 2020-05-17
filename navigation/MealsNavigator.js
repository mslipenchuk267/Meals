import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'

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

        defaultNavigationOptions: {
            headerBackAllowFontScaling: true,
            backgroundColor: 'white',
            headerStyle: {
                backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.primaryColor
            },
            headerTintColor:
                Platform.OS === 'ios' ? Colors.primaryColor : 'white',
        }
    });

export default createAppContainer(MealsNavigator);