import React from 'react';
import { View } from 'react-native';
import AppScreen from './Navigations/Navigators';

const MyApp = props => {
  return(
    <View style = {{flex:1}}>
      <AppScreen />
    </View>

  );
};

export default MyApp;