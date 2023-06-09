import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Main({route}) {
  
 const navigation = useNavigation();

 return (
   <View style = {styles.container}>
    <View style = {styles.Header}>
         <Text style = {styles.title}>Notes</Text>

         <TouchableOpacity  
          onPress={() => navigation.navigate('Menu',{user:route.params?.user})}>
         <Text style = {styles.Menus}><Icon name="bars" size={50} color="#C6D0F5" /></Text>
         </TouchableOpacity>
     </View>

     
      <View style = {styles.containerBackground}>
        <TouchableOpacity style = {styles.Button}>
         <Text style = {styles.tag}> TAG 1 </Text>
         </TouchableOpacity>

         <TouchableOpacity style = {styles.ButtonV}>
         <Text style = {styles.tag2}> TAG 2 </Text>
         </TouchableOpacity>

         
         <TouchableOpacity style = {styles.ButtonG}>
         <Text style = {styles.tag3}> TAG 3 </Text>
         </TouchableOpacity>
      </View>

      
      <View style = {styles.containerNote}>
   
            <View style = {styles.Note}>
            <TouchableOpacity   onPress={() => navigation.navigate('Block')}>
               <View style = {styles.NoteTitle}>
                 <Text style = {styles.textNoteTitle}><Icon name="angle-right" size={30} color="#C6D0F5" />  Locked </Text>
                </View>
                 <Text style = {styles.textNote}>....</Text>
                 </TouchableOpacity>
                </View>
                <View style = {styles.Note}>
            <TouchableOpacity   onPress={() => navigation.navigate('Note')}>
               <View style = {styles.NoteTitle}>
                 <Text style = {styles.textNoteTitle}><Icon name="angle-right" size={30} color="#C6D0F5" />  Unlocked </Text>
                </View>
                 <Text style = {styles.textNote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet ex et luctus facilisis. Morbi ac arcu ac mi suscipit semper. Vivamus pellentesque lobortis pellentesque. Sed nec nisi malesuad</Text>
                 </TouchableOpacity>
                </View>
            </View>


            <View>
            <TouchableOpacity  onPress={() => navigation.navigate('Note')}>
            <View  style = {styles.ButtonPlus} >
            <Text ><Icon name="pencil" size={40} color="#C6D0F5" /></Text>
            </View>   
         </TouchableOpacity>
         
               </View>
    </View>
  );
}

