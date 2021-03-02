import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'

const  DetialLaw = ({title1,title2,title3,line1,line2,line3,line4,line5,line6,line7,picture}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.HeaderText}>{title1}</Text>
            <Text style={styles.HeaderText}>{title2}</Text>
            <Text style={styles.HeaderText}>{title3}</Text>

            <View style={styles.subcontainer}>
                <Text style={styles.text}>{line1}</Text>
                <Text style={styles.text}>{line2}</Text>
            </View>
            <View>
                <Text style={styles.text1}>{line3}</Text>
                <Text style={styles.text1}>{line4}</Text>
                <Text style={styles.text1}>{line5}</Text>
                <Text style={styles.text1}>{line6}</Text>
                <Text style={styles.text1}>{line7}</Text>
            </View>
            <View style={styles.subcontainer}>
                <Image  style={styles.picture} source={picture}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    subcontainer: {
        paddingTop: 20,
        alignContent: 'center',
        alignItems: 'center'
    },
    HeaderText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#FF0000'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center'  
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 18,
        marginLeft: 70
       
    },
    picture: {
        height: 120,
        width: 120,
        marginTop: 30
    }
    
})

export default  DetialLaw