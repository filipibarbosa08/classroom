import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { Atividade } from "../screens/Atividade";
import { Login } from "../screens/SignIn/login";

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator>

            <Screen
               name="Login"
               component={Login}
             />
            
             <Screen
               name="Home"
               component={Home} 
             /> 
             <Screen
               name="Atividade"
               component={Atividade} 
             /> 
        </Navigator>
    );
}