import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Forgot from "../pages/Forgot";
import Main from "../pages/Main";
import Menu from "../pages/Menu";
import Block from "../pages/Block";
import Note from "../pages/Note";


const Stack = createNativeStackNavigator();

export default function Routes (){
    
    return(

        <Stack.Navigator>
            <Stack.Screen
            name= "Login"
            component={Login}
            options={{headerShown:false}}
            />

        <Stack.Screen
            name= "Register"
            component={Register}
            options={{headerShown:false}}
            />

           <Stack.Screen
            name= "Forgot"
            component={Forgot}
            options={{headerShown:false}}
            />

           <Stack.Screen
            name= "Main"
            component={Main}
            options={{headerShown:false}}
            />

           <Stack.Screen
            name= "Menu"
            component={Menu}
            options={{headerShown:false}}
            />

            
           <Stack.Screen
            name= "Block"
            component={Block}
            options={{headerShown:false}}
            />

           <Stack.Screen
            name= "Note"
            component={Note}
            options={{headerShown:false}}
            />


        </Stack.Navigator>
    )
}