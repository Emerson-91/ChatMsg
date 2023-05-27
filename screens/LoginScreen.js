import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from '@rneui/base'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {

    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Image source={require('../src/img/chat.png')}
                style={styles.logo}
            />
            <Text>PAREI EM 1:07</Text>
            <Text>https://www.youtube.com/watch?v=MJzmZ9qmdaE&t=1483s</Text>
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