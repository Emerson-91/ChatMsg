import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, Icon, Input } from '@rneui/base';

import { db, addDoc, collection } from '../firebase';
import HomeScreen from './HomeScreen';

const AddChatScreen = ({navigation}) => {
    const [input, setInput] = useState("")

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Adicionar Novo Chat",
        });
    }, [navigation])

    const createChat = async () => {
        try {
            await addDoc(collection(db, "Chat"), {
              chatName: input,
            }).then(()=>{
                navigation.goBack()
            })
            console.log("chat adicionado! com o nome: ", input);
          } catch (e) {
            console.error("Erro ao adicionar o Chat: ", e);
          }
        }

  return (
    <View style={styles.container}>
        <Input 
            placeholder='Digite um nome para o chat'
            value={input}
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={createChat}
            leftIcon={
                <Icon name="wechat" type='antdesign' size={24} color="#000" />
            }
        />
        <Button onPress={createChat} title="Criar novo Chat"/>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'$FFF',
        padding:30,
        height:"100%"
    },

})