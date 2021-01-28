import React from 'react';
import { View, Text, StyleSheet, Button, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = props => {
  return(
   <View style={styles.screen}>
      {/* <Button style={{color: 'whit'}} title="Go For Login OR SignUp" onPress={() => {
        props.navigation.navigate("Login")
      }}/> */}
      <TouchableOpacity onPress={() => {props.navigation.navigate("Login")}}>
        <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold',marginBottom:100,borderWidth:2,borderRadius:30,padding:15,borderColor:"lightgreen"}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {props.navigation.navigate("SignUp")}}>
        <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold',borderWidth:2,borderRadius:30,padding:15,borderColor:"lightgreen"}}>SignUp</Text>
      </TouchableOpacity>

    </View> 
  );
};

const styles =  StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"crimson",
        color:"white",
        
      

    }
});

export default Home;