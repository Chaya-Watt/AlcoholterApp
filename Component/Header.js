import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {
  return(
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.line}/>
    </View>
  )
}



const styles = StyleSheet.create({
  header: {
    height:60,
    padding:15,
    backgroundColor: 'black'
  },
  text: {
      color: '#fff',
      fontSize:30,
      textAlign: 'center'
  },
  line: {
    backgroundColor: '#fff',
    marginTop:5,
    width:500,
    height:2
  }
})

export default Header;