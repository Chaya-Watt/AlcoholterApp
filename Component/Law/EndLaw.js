import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const EndLaw = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text} >โดยผู้ขับขี่ทั่วไป ถ้าระดับแอลกอฮอล์ในเลือด </Text>
            <Text style={styles.Text}>
                <Text style={styles.redText}>เกิน 50 มิลลิกรัมเปอร์เซ็นต์</Text>
                ถือว่า
                <Text style={styles.redText}>ผิดกฎหมาย</Text>
            </Text>
            <Text style={styles.Text}>ส่วนผู้ขับขี่ที่มี
                <Text style={styles.yellowText}>อายุน้อยกว่า 20 ปีบริบูรณ์</Text>
            </Text>
            <Text style={styles.Text}>ที่ได้รับใบอนุญาตขับขี่ชั่วคราวทั้งผู้ดื่มและขับขี่,</Text>
            <Text style={styles.Text}>ผู้ที่มีใบอนุญาตขับขี่ประเภทอื่น ๆ ที่ใช้แทนกันไม่ได้</Text>
            <Text style={styles.Text}>และผู้ที่ไม่มีใบอนุญาตขับขี่หรือถูกระหว่างพักใช้</Text>
            <Text style={styles.Text}>หรือถูกเพิกถอนใบอนุญาตขับขี่</Text>
            <Text style={styles.Text}>ถ้าเป่าแล้วมีระดับแอลกอฮอล์ในเลือด</Text>		  
            <Text style={styles.redText}>เกิน 20 มิลลิกรัมเปอร์เซ็นต์</Text>
            <Text style={styles.Text}>ก็ถือว่า
                <Text style={styles.redText}>ผิดกฎหมาย</Text>
                เช่นกัน
            </Text>

            <Image 
            source={require('../../Icons/Law/court.png')}
            style={styles.picture}/>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignContent: 'center',
        alignItems: 'center'
    },
    Text: {
        paddingTop:3,
        paddingHorizontal:12,
        color: '#FFFFFF',
        fontSize:18 ,
        textAlign: 'center',
    },
    redText:{
        paddingTop:3,
        paddingHorizontal:12,
        color : '#FF0000',
        fontSize:18 ,
        textAlign: 'center',
    },
    yellowText:{
        paddingTop:3,
        paddingHorizontal:12,
        color : '#FBD343',
        fontSize:18 ,
        textAlign: 'center',
    },
    picture: {
        marginTop: 30,
        height: 120,
        width: 120,
    }
    
})

export default EndLaw