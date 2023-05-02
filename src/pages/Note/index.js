import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';




export default function Note() {
  
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
 

 return (
   <View style = {styles.container}>

      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerForm}>
          <Text style = {styles.title}>Note Title Note</Text>
          <View style = {styles.containerNote}>
          <TextInput 
          editable
          multiline
          numberOfLines={4}
          maxLength={500}
          onChangeText={text => onChangeText(text)}
          style = {styles.Notetext}>Clica Aqui!</TextInput>
          </View>
      </View>
    </View>
  );
}

