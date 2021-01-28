import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const RootScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                This is the Root Screen
      </Text>
            {/* <Button title="Go to chat screen" onPress={() => {
                props.navigation.navigate("Chat")
            }} /> */}
            <Button title="Go Back" onPress={() => { props.navigation.pop() }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RootScreen;