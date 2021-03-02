import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const InputBefore = ({title,detial,picture}) => {
    return (
        <View  style={{marginTop: 20}}>

            <Text style={styles.text}>{title}</Text>
            <Text style={styles.subtext}>{detial}</Text>
            <Image  style={styles.picture} source={picture}/>

        </View>
    )
}

export default InputBefore


const styles = StyleSheet.create({

    text: {
        color: '#FBD343',
        fontSize:20,
        marginLeft:15 
    },
    subtext: {
        color: '#fff',
        fontSize:18,
        marginLeft:15 
    },
    picture: {
        marginTop:15,
        marginLeft:70,
        height:180,
        width:250,
    },
    
})