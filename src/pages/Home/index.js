import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid,BackHandler} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as NavigationBar from 'expo-navigation-bar';

const showToast = () => {
  ToastAndroid.show('Sua conta foi excluída', ToastAndroid.SHORT);
};


export default function Home({route}) {
  const navigation = useNavigation();
  
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
        
          <View>
            <TouchableOpacity onPress={() => 
           
   {
    showToast();
    BackHandler.exitApp();
   }}
          >
            <View  style = {styles.ButtonPlus} >
            <Text ><Icon name="trash" size={30} color="#E78284" /></Text>
            </View>   
         </TouchableOpacity >
         
               </View>
         </View>
         
         
          </View>
      </View>
   
    
  );
}

