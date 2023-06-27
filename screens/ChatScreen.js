import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from '@rneui/themed';
import FeatherIcons from 'react-native-vector-icons/Feather';

const ChatScreen = ({ navigation, route }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={styles.title}>
          <Avatar rounded source={{
            uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }} />
          <Text style={styles.titleNome}>{route.params.chatName}</Text>
        </View>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity>
            <FeatherIcons name="video" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      )
    })
    
  }, [navigation])
  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleNome: {
    color: "#FFF",
    marginLeft: 10,
    fontWeight: "700",
  }
})