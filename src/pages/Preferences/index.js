import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as NavigationBar from 'expo-navigation-bar';



export default function Preferences() {

    NavigationBar.setVisibilityAsync("hidden");
    
 return (
   <View style = {styles.container}>

      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Preferences</Text>
          <View style = {styles.containerNote}>
          <View  style = {styles.ButtonProfile} >
           <Icon name="gear" size={125} color="#C6D0F5" />
           </View>
          </View>


          <View style = {styles.containerInput}>
          <Text style = {styles.input}> Dark Mode: On</Text>
          <Text style = {styles.input}> Font Size : 12px</Text>
          <Text style = {styles.input}> Mode : Portrait</Text>
          <Text style = {styles.input}> Background Color : Grey</Text>
          <Text style = {styles.input}> Notes Unlocked: Not All</Text>

          <View>
            <TouchableOpacity>
            <View  style = {styles.ButtonPlus} >
            <Text ><Icon name="pencil" size={30} color="#C6D0F5" /></Text>
            </View>   
         </TouchableOpacity>
         
               </View>
          
          
         </View>

          </View>
      </View>
   
    
  );
}

