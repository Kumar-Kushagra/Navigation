import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';


const Splash = props => {
    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("HomeScreen") }}>
                <Text style={{ fontSize: 50, color: 'black', fontWeight: 'bold' }}>Here We Go!!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
});

export default Splash;