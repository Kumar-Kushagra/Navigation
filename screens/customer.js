import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Customer = props => {
    return (
        <View style={styles.screen}>

            <Text>
                This is the Customer Screen
                </Text>

            <Button title="Go Back" onPress={() => { props.navigation.pop() }} />
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightsalmon'

    }
});

export default Customer;