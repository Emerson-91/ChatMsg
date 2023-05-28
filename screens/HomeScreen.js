import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
//import { getAuth, signOut } from 'firebase/auth';


const logOut = () => { 
  
  };
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
     
      <Button title="Sair" onPress={() => logOut()} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})