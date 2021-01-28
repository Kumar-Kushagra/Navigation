import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const Home = props => {
  return(
   <View style={styles.screen}>
      <Text>
        Home Screen
      </Text> 
      <Button title="Go to Root Screen" onPress={() => {
        props.navigation.navigate("Tabs")
      }}/>
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

export default Home;