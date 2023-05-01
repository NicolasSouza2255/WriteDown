import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Note() {
  
 const navigation = useNavigation();

 return (
   <View style = {styles.container}>
      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Note</Text>

          

          <View style = {styles.containerLock}>
            
          </View>
           

       </View>
    </View>
  );
}

