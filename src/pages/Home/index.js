import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as NavigationBar from 'expo-navigation-bar';



export default function Home() {
  
 return (
   <View style = {styles.container}>

      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Profile</Text>
          <View style = {styles.containerNote}>
          <View  style = {styles.ButtonProfile} >
           <Icon name="user" size={125} color="#C6D0F5" />
           </View>
          </View>


          <View style = {styles.containerInput}>
          <Text style = {styles.input}> Name : Nicolas Souza</Text>
          <Text style = {styles.input}> Birth : 14/05/2003</Text>
          <Text style = {styles.input}> E-mail : Nicolas@teste.com</Text>
          <Text style = {styles.input}> Phone : 47999999999</Text>
          <Text style = {styles.input}> Address: Univali Teste</Text>
          <Text style = {styles.input}> Count : Free</Text>
          
         </View>

          </View>
      </View>
   
    
  );
}

