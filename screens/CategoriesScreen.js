import { Button, FlatList, Platform, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors';


const CategoriesScreen = ( props ) =>
{
    const renderGridItem = ( itemData ) =>
    {
        return (
            <TouchableOpacity onPress={ () => props.navigation.navigate( {
                routeName: 'CategoryMeals',
                params: {
                    categoryId: itemData.item.id,
                }
            } ) } style={ styles.gridItem }>
                <View >
                    <Text>{ itemData.item.title }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            keyExtractor={ ( item, index ) => item.id }
            data={ CATEGORIES }
            renderItem={ renderGridItem }
            numColumns={ 2 } />
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
}

const styles = StyleSheet.create( {
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
} );
export default CategoriesScreen;