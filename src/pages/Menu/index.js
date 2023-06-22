import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from "../Card";
import Home from "../Home";
import Store from "../Store";
import Preferences from "../Preferences";


const Tab = createBottomTabNavigator();

export default function Menu({route}) {
 
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
          
            <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="card-account-details-outline" color={color} size={size} />
          ),headerShown:false
        }}
      /> 
            <Tab.Screen name="Card" component={Card} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card-check-outline" color={color} size={size} />
          ),headerShown:false
        }} />
            <Tab.Screen name="Store" component={Store} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gift-outline" color={color} size={size} />
          ),headerShown:false
        }}/>
            <Tab.Screen name="Preferences" component={Preferences} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="power-cycle" color={color} size={size} />
          ),headerShown:false
        }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

