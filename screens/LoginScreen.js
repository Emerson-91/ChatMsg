import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Image } from '@rneui/base'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        
    }
    return (
        <View>
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
            <Button containerStyle={styles.button} type="outline" title="Register" />
        </View>
        
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        margin: 10,
    },
    inputContainer: {

    },
    button: {
        paddingTop:10,
    },
})