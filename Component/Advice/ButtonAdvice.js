import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base';

const ButtonAdvice = ({title,text,text1,...props}) => {
    return (
        <View>
            <Button rounded warning style={styles.button} {...props} >
                <Text style={styles.text}>{title}</Text>
            </Button>
            <View style={{marginTop:10,padding:20}}>
                
                <Text style={styles.subtext}>คำแนะนำที่ควรทำ{text}เพื่อเพิ่ม</Text>
                <Text style={styles.subtext1}>ประสิทธิภาพให้ร่างกายสามารถรับมือและกำจัดปริมาณแอลกอฮอล์ให้ดีมากยิ่งขึ้น ซึ่งจะประกอบด้วย{text1}</Text>
                <Text style={styles.subtext2}>หมายเหตุ : โปรดใช้วิจารณญาณในการอ่าน</Text>
                
            </View>
        </View>
    )
}

export default ButtonAdvice

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        height: 70,
        width: 250,
        marginLeft: 20
    },
    text: {
        fontSize: 25,
        marginLeft: 25,
    },
    subtext: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 30
    },
    subtext1: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10
    },
    subtext2: {
        color: 'red',
        marginLeft:10,
        fontSize:18,
        marginTop:20
    }
})