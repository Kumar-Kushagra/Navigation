import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Login = props => {
  return (
    <View style={styles.screen}>

      <Button title="Login" onPress={() => { props.navigation("root") }} />
      <Button title="SignUp" onPress={() => { props.navigation("root") }} />
    </View>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;