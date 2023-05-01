import React from 'react';
import { View, Text, TouchableOpacity,TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
  const navigation = useNavigation();

  return (
    <View style = {styles.container}>
       <View style = {styles.containerBackground}>
       </View>
       <View style = {styles.containerLogin}>
           <Text style = {styles.title}>Register</Text>
 
           <TextInput 
           placeholder=" Username"
           placeholderTextColor={'#C6D0F5'}
           style = {styles.input}
           />

           <TextInput 
           placeholder=" E-mail"
           placeholderTextColor={'#C6D0F5'}
           style = {styles.input}
           />
 
           <TextInput 
           placeholder=" Password"
           placeholderTextColor={'#C6D0F5'}
           secureTextEntry={true}
           style = {styles.input}
           />
 
           <TouchableOpacity style = {styles.Button}
           onPress={() => navigation.navigate('Login')}>
             <Text style = {styles.ButtonText}>Register</Text>
           </TouchableOpacity>
 
           <TouchableOpacity
           onPress={() => navigation.navigate('Login')}>
             <Text style = {styles.TextLinkR}>Already a user ?</Text>
           </TouchableOpacity>
 
        </View>
     </View>
   );
}