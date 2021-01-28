import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Chat from '../screens/chat';
import RootScreen from '../screens/root';


const Root = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const AppScreen = () => {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="HomeScreen" component={Home} />
                <Root.Screen name="Tabs" component={Tabs} />
            </Root.Navigator>
        </NavigationContainer>
    );

}

function MyBottomTabs() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Root" component={RootScreen} />
            <BottomTab.Screen name="Chat" component={Chat} />
        </BottomTab.Navigator>
    );
}

const Tabs = () => {
    return (

        <Tab.Navigator>
            {/* <Tab.Screen name="Home" component={Home} /> */}
            <Tab.Screen name="Root" component={MyBottomTabs} />

            <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
    );
}
export default AppScreen;


