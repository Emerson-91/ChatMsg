import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Button } from '@rneui/base'
import CustomListItem from '../components/CustomListItem';
import { StatusBar } from 'expo-status-bar';
//import { getAuth, signOut } from 'firebase/auth';
import { auth, db } from '../firebase'
import { Avatar } from '@rneui/themed';


const logOut = () => { 
  
  };
const HomeScreen = ({navigation}) => {
  console.log(auth.photoURL)
  useLayoutEffect(() =>{
    navigation.setOptions({
      title:"ChatMSG",
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: "#FFF"},
      headerTitleStyle: {color:"#000"},
      headerTintColor:"#000",
      headerleft: () => 
        <View style={{marginLeft: 20}}>
            <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} />
            
        </View>

    })
  }, [])

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})