import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as NavigationBar from 'expo-navigation-bar';


export default function Block() {

NavigationBar.setVisibilityAsync("hidden");
 const navigation = useNavigation();

 return (
   <View style = {styles.container}>
      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Lock In</Text>

          <Text style = {styles.Lock}><Icon name="lock" size={150} color="#C6D0F5" /></Text>

          <View style = {styles.containerLock}>
            <View style = {styles.containerLockRow}>
             <TouchableOpacity style = {styles.Button}>
                  <Text style = {styles.ButtonText}>1</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {styles.Button}>
                      <Text style = {styles.ButtonText}>2</Text>
                 </TouchableOpacity>
             <TouchableOpacity style = {styles.Button}>
                   <Text style = {styles.ButtonText}>3</Text>
                 </TouchableOpacity>
            </View>
            <View style = {styles.containerLockRow}>
             <TouchableOpacity style = {styles.Button}>
                  <Text style = {styles.ButtonText}>4</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {styles.Button}>
                      <Text style = {styles.ButtonText}>5</Text>
                 </TouchableOpacity>
             <TouchableOpacity style = {styles.Button}>
                   <Text style = {styles.ButtonText}>6</Text>
                 </TouchableOpacity>
            </View>
            <View style = {styles.containerLockRow}>
             <TouchableOpacity style = {styles.Button}>
                  <Text style = {styles.ButtonText}>7</Text>
             </TouchableOpacity>
             <TouchableOpacity style = {styles.Button}>
                      <Text style = {styles.ButtonText}>8</Text>
                 </TouchableOpacity>
             <TouchableOpacity style = {styles.Button}>
                   <Text style = {styles.ButtonText}>9</Text>
                 </TouchableOpacity>
            </View>
            <View style = {styles.containerLockRow}>
            
             <TouchableOpacity style = {styles.Button}>
                      <Text style = {styles.ButtonText}>0</Text>
                 </TouchableOpacity>
            </View>
          </View>
           

       </View>
    </View>
  );
}

