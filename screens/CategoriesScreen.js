import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CategoryGridTile from '../components/CategoryGridTile'
import CustomHeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                //keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2} />
        </View>
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'white'
    },
});

export default CategoriesScreen;