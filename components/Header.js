import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
function Header() {
  return (
    <View>
        <Text style={styles.header}>My Todos</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'orange',
        width:'100%',
        color:'white',
        textAlign:'center',
        height:50,
        paddingTop:15,
        fontSize:16,
    }
})

export default Header