import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'

export default function Header() {
  return (
    <View>
        <Image source={require('../../../assets/images/logo.png')}
        style={styles.logo}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:50,
        height:50
    }
})