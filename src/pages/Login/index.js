import React ,{ useState } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import Toast from 'react-native-toast-message';

function VerificaLogin(email,password) {
  var baseUrl = "https://writedownonlineapi.up.railway.app/api/User/Login";
  var params = "?Email=" + encodeURIComponent(email) + "&Password=" + encodeURIComponent(password);
   return url = baseUrl + params;
}


export default function Login() {
  
  const navigation = useNavigation();
  const [getEmail, setEmail] = useState('');
  const [getSenha, setPassword] = useState('');
  


 return (

 
   <View style = {styles.container}>
      <View style = {styles.containerBackground}>
      </View>
      <View style = {styles.containerLogin}>
          <Text style = {styles.title}>Welcome Back!</Text>

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
     
          <TouchableOpacity style = {styles.ButtonT}
             onPress={() => {if(true)
              {navigation.navigate('Forgot')}}}>
             <Text style = {styles.TextLinkF}>Forgot ?</Text>
          </TouchableOpacity>


          <TouchableOpacity style = {styles.Button}
           onPress={() => {
           
            fetch(VerificaLogin(getEmail,getSenha), {
   
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
              .then(resposta => resposta.json())
                .then( (json) => {console.log(json);
                  if(json.isSuccessTypeResult){
                    navigation.navigate('Main',{user:json})
                  }//aqui fazer toast
                })
                .catch((error) => console.error(error));

    
           }}>
            <Text style = {styles.ButtonText}>Login</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style = {styles.ButtonR}
          onPress={() => navigation.navigate('Register')}>
                <Text style = {styles.TextLinkR}>Not a user let ?</Text>
          </TouchableOpacity>

       </View>
    </View>
  );
}

