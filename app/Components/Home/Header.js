import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native-web'
import { SearchBar } from 'react-native-screens'

export default function Header() {
  return (
    <View>
        <Image source={require('../../../assets/images/logo.png')}
        style={styles.logo}/>

        <View>
            <TextInput placeholder='Search'
                style={styles.searchBar}
            />
        </View>
        <Image source={require('../../../assets/images/placeholder.jpg')}
            style={styles.userImage}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50
    },
    searchBar:{
        borderWidth:1,
        borderColor:'#000',
        padding:4,
        borderRadius:50,
        paddingLeft:10
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100
    }
})