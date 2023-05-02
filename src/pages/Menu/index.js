import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from "../Card";
import Home from "../Home";
import Store from "../Store";
import Preferences from "../Preferences";
import * as NavigationBar from 'expo-navigation-bar';

const Tab = createBottomTabNavigator();

export default function Menu() {
 
  NavigationBar.setVisibilityAsync("hidden");
 return (
    
  <NavigationContainer independent ={true} >
         <Tab.Navigator
            screenOptions={{
            tabBarActiveTintColor: "#9747FF",
            tabBarInactiveTintColor: "#C6D0F5",
            tabBarStyle: {
            height: 55,
            backgroundColor:'#303446',
            },
            tabBarLabelStyle: {
            fontSize: 0,
            margin: 0,
           },
         }}>
          
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Card" component={Card} options={{headerShown:false}} />
            <Tab.Screen name="Store" component={Store} options={{headerShown:false}}/>
            <Tab.Screen name="Preferences" component={Preferences} options={{headerShown:false}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

