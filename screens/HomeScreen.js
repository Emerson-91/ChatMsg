import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem';
import Icon from 'react-native-vector-icons/EvilIcons';
import { StatusBar } from 'expo-status-bar';
import { auth, collection, db } from '../firebase'
import { Avatar } from '@rneui/themed';
import { signOut } from 'firebase/auth';
import { getDocs } from '../firebase';
import { onSnapshot } from 'firebase/firestore';


const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([])

  const sair = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login") // Redirecionar para a tela de login após sair
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Chat"), (snapshot) => {
      const tempList = [];
      snapshot.forEach((doc) => {
        tempList.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setChats(tempList);
    });
  
    return () => unsubscribe();
  }, []);



  useLayoutEffect(() => {
    navigation.setOptions({
      title: "ChatSphere",
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: "#FFF" },
      headerTitleStyle: { color: "#000" },
      headerTintColor: "#000",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
  }, [navigation]);

  const enterChat = (id, chatName) =>{
    navigation.navigate("Chat", {
      id,
      chatName,
    })
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <ScrollView>
        {chats.map(({ id, chatName }) => (
          <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
        ))}
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")} style={styles.addChatButton}>
            <Icon name="comment" size={70} style={styles.addChatIcon} />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%'
  },
  addChatButton: {
    position: 'relative',
    alignItems: 'flex-end',
    marginTop: "140%",
  },
  addChatIcon: {
    color: "#27408B",
    height: 62,
  },
});
