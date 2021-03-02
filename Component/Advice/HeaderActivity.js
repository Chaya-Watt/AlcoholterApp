import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const HeaderActivity = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>กิจกรรมแก้เมา</Text>
                <Image source={require('../../Icons/back.png')} style={styles.picture} />
            </View>
        </View>
    )
}

export default HeaderActivity

const styles = StyleSheet.create({
    container:  {
        paddingHorizontal: 60,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        fontSize:24,
        marginLeft:10
    },
    picture: {
        width: 25,
        height: 25,
        transform: [{ rotate: '270deg'}],
        marginLeft:205
    }
})