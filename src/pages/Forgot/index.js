import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';


export default function Forgot() {

  NavigationBar.setVisibilityAsync("hidden");
 const navigation = useNavigation();

 return (
   <View style = {styles.container}>
      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerLogin}>
          <Text style = {styles.title}>Recover Account</Text>

          <Text style = {styles.text}>Enter your email to receive a new password!</Text>

          <TextInput 
          placeholder=" E-mail"
          placeholderTextColor={'#C6D0F5'}
          style = {styles.input}
          />

          <TouchableOpacity style = {styles.Button}>
            <Text style = {styles.ButtonText}>Send</Text>
          </TouchableOpacity>

       </View>
    </View>
  );
}

