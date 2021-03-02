import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'

const HeaderLaw = ({title1,title2,title3,line1,line2,line3,line4,line5,line6,line7,picture}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.HeaderText1}>{title1}</Text>
            <Text style={styles.HeaderText}>{title2}</Text>
            <Text style={styles.HeaderText}>{title3}</Text>

            <View style={styles.subcontainer}>
                <Text style={styles.text}>{line1}</Text>
                <Text style={styles.text}>{line2}</Text>
                <Text style={styles.text}>{line3}</Text>
                <Text style={styles.text}>{line4}</Text>
                <Text style={styles.text}>{line5}</Text>
                <Text style={styles.text}>{line6}</Text>
                <Text style={styles.text}>{line7}</Text>

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
    HeaderText1: {
        fontSize: 24,
        textAlign: 'center',
        color: '#FBD343'
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
    picture: {
        height: 120,
        width: 120,
        marginTop: 40
    }
    
})

export default HeaderLaw