import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FavouritesScreen = () =>
{
    return (
        <View style={ styles.screen }>
            <Text>This is the FavouritesScreen</Text>
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
export default FavouritesScreen;