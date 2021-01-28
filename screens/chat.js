import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Chat = props => {
  return(
    <View style={styles.screen}>
      <Text>
        Chat Screen
      </Text>
      <Button title="Go Back" onPress={() => {props.navigation.pop()}} />
    </View>
  );
};

const styles =  StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Chat;