import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import * as NavigationBar from 'expo-navigation-bar';




export default function App() {

  NavigationBar.setVisibilityAsync("hidden");
  
  return (
    
   <NavigationContainer>
    <StatusBar backgroundColor="#232634" barStyle= "light-content"/>
    <Routes/>
   </NavigationContainer>
  );
}

