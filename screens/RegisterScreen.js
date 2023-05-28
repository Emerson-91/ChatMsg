import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Button, Input, Image } from '@rneui/base'
import React, { useLayoutEffect, useState } from 'react'
import { Icon } from '@rneui/themed'

import { auth, createUserWithEmailAndPassword } from '../firebase'



const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("")

/*
 useLayoutEffect(() =>{
  navigation.setOptions({
   headerLeft:
  })
 }, [navigation]);
 */
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    userCredential.user.update({
      displayName: name,
      photoURL: imageUrl || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Text style={styles.texto}>
        Criar Conta
      </Text>
      <View style={styles.inputContainer}>
        <Input 
          placeholder="Nome Completo" 
          autofocus 
          type='text' 
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input 
          placeholder="Email" 
          type='Email' 
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder="Senha" 
          type='password' 
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input 
          placeholder="Imagem de perfil (opcional)" 
          type='text' 
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button containerStyle={styles.button} raised onPress={register} title="Cadastre-se" />
      
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
  },
  texto:{
    marginBottom:'3%',
    color:'#191970',
    fontSize:26,
    fontWeight:'bold',
  },
  inputContainer:{
    width:300,
    marginTop:10,
  },
  button:{
    width:200,
    marginTop:10,
  }
})