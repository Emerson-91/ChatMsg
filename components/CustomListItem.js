import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/base'

const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem>
        <Avatar
            rounded
            source={{
                uri:
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }}
        />
        <ListItem.Content>
            <ListItem.Title style={{fontWeight: "800"}}>
                <Text>Teste Chat</Text>
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                teste de sub titulo
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})