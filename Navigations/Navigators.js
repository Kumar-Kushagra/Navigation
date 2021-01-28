import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../screens/Splash';
import Home from '../screens/home';
import Login from '../screens/Login';
import RootScreen from '../screens/root';

import First from '../screens/first';
import Second from '../screens/second';
import Third from '../screens/third';
import Fourth from '../screens/fourth';
import Fifth from '../screens/fifth';
import Customer from '../screens/customer';
import Vendor from '../screens/vendor';

const Root = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const UpperTab = createMaterialTopTabNavigator();

const AppScreen = () => {
    return (
        <NavigationContainer>
            <Root.Navigator>

                <Root.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />

                <Root.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
                <Root.Screen name="Login" component={loginScreen} options={{ headerShown: false }} />
                <Root.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            </Root.Navigator>
        </NavigationContainer>
    );

}

const loginScreen = () =>
    <BottomTab.Navigator>
        <BottomTab.Screen name="First" component={First} />
        <BottomTab.Screen name="Second" component={Second} />
        <BottomTab.Screen name="Thrid" component={Third} />
        <BottomTab.Screen name="Fourth" component={Fourth} />
        <BottomTab.Screen name="Fifth" component={Fifth} />
    </BottomTab.Navigator>


const SignUpScreen = () =>
    <UpperTab.Navigator 
    >
        <UpperTab.Screen name="Customer" component={Customer} />
        <UpperTab.Screen name="Vendor" component={Vendor} />
    </UpperTab.Navigator>



export default AppScreen;
