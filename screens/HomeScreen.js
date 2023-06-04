import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../firebase'
import { Avatar } from '@rneui/themed';
import { signOut } from 'firebase/auth';

const HomeScreen = ({ navigation }) => {

  const sair = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login") // Redirecionar para a tela de login após sair
    } catch (error) {
      alert(error);
    }
  };

  console.log(auth.currentUser?.photoURL)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "ChatMSG",
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: "#FFF" },
      headerTitleStyle: { color: "#000" },
      headerTintColor: "#000",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth.currentUser?.photoURL }} />
            <Text>{auth.currentUser?.displayName}</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity onPress={sair}>
          <Text>Sair</Text>
          </TouchableOpacity>
          
        </View>
      )
    })
  }, [])


  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <CustomListItem />
        <Text>{auth.currentUser?.displayName}</Text>
        <Text>{auth.currentUser?.photoURL}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})