import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealDetailScreen = () =>
{
    return (
        <View style={ styles.screen }>
            <Text>This is the MealDetailScreen</Text>
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
export default MealDetailScreen;