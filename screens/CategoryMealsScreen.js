import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
const CategoryMealsScreen = (props) =>
{   const catId = props.navigation.getParam('categoryId');
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
    return (
        <View style={ styles.screen }>
            <Text>This is the CategoryMealsScreen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Go to Details!' onPress={()=>{
                props.navigation.navigate({routeName:'MealDetail'})
            }}/>
        </View>
    );
}

const styles = StyleSheet.create( {
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
} );
export default CategoryMealsScreen;