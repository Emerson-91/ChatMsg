import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from '@rneui/base'
import { auth } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userCredential) => {
            if(userCredential){
                navigation.replace("Home")
                
            }
        });
        return unsubscribe;
    }, [])
    const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Login e/ou Senha inválidos")
  });
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Image source={require('../src/img/chat.png')}
                style={styles.logo}
            />
            
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    autoFocus
                    type="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button onPress={() => navigation.navigate("Register")}containerStyle={styles.button} type="outline" title="Register" />
        </KeyboardAvoidingView>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,

    },
    logo: {
        width: 200,
        height: 200,
        margin: 10,
    },
    inputContainer: {
        width:300,
    },
    button: {
        width:200,
        marginTop:10,
    },
})