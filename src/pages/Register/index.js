import React ,{ useState } from 'react';
import { View, Text, TouchableOpacity,TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';



export default function Register() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  


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
           onChangeText={text => setNome(text)}
           />

           <TextInput 
           placeholder=" E-mail"
           placeholderTextColor={'#C6D0F5'}
           style = {styles.input}
           onChangeText={text => setEmail(text)}
           />
 
           <TextInput 
           placeholder=" Password"
           placeholderTextColor={'#C6D0F5'}
           secureTextEntry={true}
           style = {styles.input}
           onChangeText={text => setPassword(text)}
           />
 
           <TouchableOpacity style = {styles.Button}
          onPress={() => {
           
            fetch('https://writedownonlineapi.up.railway.app/api/User', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "name": nome,
                "email": email,
                "fone": "0",
                "password": senha
              })
            })
              .then(resposta => resposta.json())
              .then( (json) => {console.log(json);
                if(json.isSuccessTypeResult){
                  navigation.navigate('Login')
                }//aqui fazer toast
              })
                .catch((error) => console.error(error));

    
           }}>
             <Text style = {styles.ButtonText}>Register</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {styles.ButtonT}
           onPress={() => navigation.navigate('Login')}>
             <Text style = {styles.TextLinkR}>Already a user ?</Text>
           </TouchableOpacity>
 
         
 
        </View>
     </View>
   );
}