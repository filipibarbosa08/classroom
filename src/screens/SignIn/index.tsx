import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import GoogleIcon from '../../assets/google-login-icon-24.jpeg';

export function SignIn() {
    return (
        
        <View style={styles.container}>

        <Text style={styles.login}>Login</Text>
        <Text style={styles.oi}>Olá, seja bem-vindo   </Text>
            <Button
                icon={() => (
                    <View>
                        <Image
                            source={GoogleIcon}
                            style={styles.icon} 
                        />
                    </View>
                )} 
                mode="contained" 
                onPress={() => console.log('Pressed')}>
                Sign In with Google
            </Button>
        </View>
    );
}