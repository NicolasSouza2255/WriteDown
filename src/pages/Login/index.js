import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';


export default function Login() {

 const navigation = useNavigation();

 return (
   <View style = {styles.container}>
      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerLogin}>
          <Text style = {styles.title}>Welcome Back!</Text>

          <TextInput 
          placeholder=" Username"
          placeholderTextColor={'#C6D0F5'}
          style = {styles.input}
          />

          <TextInput 
          placeholder=" Password"
          placeholderTextColor={'#C6D0F5'}
          secureTextEntry={true}
          style = {styles.input}
          />

          <TouchableOpacity style = {styles.ButtonT}
          onPress={() => navigation.navigate('Forgot')}>
             <Text style = {styles.TextLinkF}>Forgot ?</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.Button}
          onPress={() => navigation.navigate('Main')}>
            <Text style = {styles.ButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.ButtonR}
          onPress={() => navigation.navigate('Register')}>
                <Text style = {styles.TextLinkR}>Not a user let ?</Text>
          </TouchableOpacity>

       </View>
    </View>
  );
}

