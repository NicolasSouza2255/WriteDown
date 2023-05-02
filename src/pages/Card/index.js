import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';

export default function Card() {
  

 return (
   <View style = {styles.container}>

      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Your Card</Text>
          <View style = {styles.containerNote}>
            <View style = {styles.containerCard}>
                <Text
                 style = {styles.Notetext}>Card Brand </Text>
              <View style = {styles.containerCardNumber}>
                <Text
                 style = {styles.Notetext}>9999 9999 9999 9999 </Text>
             </View>
             <View style = {styles.containerCardOtherInfo}>

             <View style = {styles.containerCardInfoName}>
                <Text
                 style = {styles.Notetext}>Nicolas Souza </Text>
                </View> 
                <View style = {styles.containerCardInfoDate}>
                <Text
                 style = {styles.Notetext}>04/10 </Text>
                </View>
             </View>

          </View>
          <View style = {styles.containerInput}>
          <TextInput 
          placeholder=" Name"
          placeholderTextColor={'#C6D0F5'}
          style = {styles.input}
          />

          <TextInput 
          placeholder=" Card Number"
          placeholderTextColor={'#C6D0F5'}
          secureTextEntry={true}
          style = {styles.input}
          />

          <TextInput 
          placeholder=" CVV"
          placeholderTextColor={'#C6D0F5'}
          style = {styles.input}
          />

          <TextInput 
          placeholder=" Date"
          placeholderTextColor={'#C6D0F5'}
          style = {styles.input}
          />   
         </View>

         <TouchableOpacity style = {styles.Button}>
            <Text style = {styles.ButtonText}>Send</Text>
          </TouchableOpacity>

          </View>
      </View>
    </View>
  );
}

