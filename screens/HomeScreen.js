import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem';
import Icon from 'react-native-vector-icons/EvilIcons';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase'
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
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <ScrollView>
          <CustomListItem />
          <TouchableOpacity style={styles.addChatButton}>
            <Icon name="comment" size={70} style={styles.addChatIcon} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addChatButton: {
    position: 'relative',
    alignItems:'flex-end',
    marginTop:"140%",
  },
  addChatIcon: {
    color: "#27408B",
    height: 62,
  },
})