import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as NavigationBar from 'expo-navigation-bar';



export default function Store() {
  
  NavigationBar.setVisibilityAsync("hidden");
  
 return (
   <View style = {styles.container}>

      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Store</Text>
          <View style = {styles.containerNote}>
          <View  style = {styles.ButtonProfile} >
           <Icon name="gift" size={125} color="#C6D0F5" />
           </View>
          </View>


          <View style = {styles.containerInput}>
          <Text style = {styles.input}>Introducing our premium service for note-taking - the perfect tool for professionals, students, and anyone in between! With our premium service, you'll have access to advanced features such as cloud syncing, advanced formatting options, and the ability to collaborate with others in real-time. Say goodbye to cluttered notebooks and hello to streamlined, efficient note-taking.</Text>

          <TouchableOpacity style = {styles.Button}>
            <Text style = {styles.ButtonText}>Take It!</Text>
          </TouchableOpacity>
         </View>

          </View>
      </View>
   
    
  );
}

