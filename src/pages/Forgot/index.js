import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';

export default function Forgot() {


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

