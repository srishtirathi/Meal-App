import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

const CategoryMealsScreen = (props) =>
{
    return (
        <View style={ styles.screen }>
            <Text>This is the CategoryMealsScreen</Text>
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