import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
const Drink = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>น้ำเปล่า</Text>
            <Text style={styles.subtext}>สาเหตุที่ทำให้แฮงค์ เกิดจากสภาวะที่ร่างกาย</Text>
            <Text style={styles.subtext}>ขาดน้ำ การดื่มน้ำเปล่าเยอะ ๆ เพื่อช่วยชดเชย</Text>
            <Text style={styles.subtext}>การเสียน้ำ</Text>
            <Image source={require('../../Pictures/AfterAdvice/water.png')} style={styles.picture}/>

            <Text style={styles.text}>เครื่องดื่มเกลือแร่และวิตามิน</Text>
            <Text style={styles.subtext}>เครื่องดื่มวิตามินจะมีวิตามินบีและวิตามินซี</Text>
            <Text style={styles.subtext}>ซึ่งช่วยลดอาการแฮงค์และอาการปวดหัวได้</Text>
            <Image source={require('../../Pictures/AfterAdvice/vitaminc.png')} style={styles.picture1}/>

            <Text style={styles.text}>นมเปรี้ยว</Text>
            <Text style={styles.subtext}>ช่วยให้ปริมาณแอลกอฮอล์ที่ฝังตัวอยู่ในลมหายใจ</Text>
            <Text style={styles.subtext}>ลดลง</Text>
            <Image source={require('../../Pictures/AfterAdvice/milk.png')} style={styles.picture}/>

            <Text style={styles.text}>กาแฟดำ</Text>
            <Text style={styles.subtext}>คาเฟอีนในกาแฟช่วยเพิ่มความดันในกระแสเลือด</Text>
            <Text style={styles.subtext}>ทำให้แอลกอฮอล์ออกจากกระแสเลือดได้เร็วขึ้น</Text>
            <Text style={styles.subtext}>ฟื้นจากอาการมึนและปวดศีรษะได้ดี</Text>
            <Image source={require('../../Pictures/AfterAdvice/coffee.png')} style={styles.picture}/>

            <View style={{paddingBottom: 20}} />

        </View>
    )
}

export default Drink

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        margin: 20,
        flex:1,
        width:800
    },
    text: {
        color: '#FBD343',
        fontSize:20,
        marginLeft:30,
        marginTop:20
    },
    subtext: {
        color: '#fff',
        fontSize:18,
        marginLeft:30,
    },
    picture: {
        marginTop:15,
        marginLeft:100,
        height:140,
        width:200,
    },
    picture1: {
        marginTop:15,
        marginLeft:120,
        height:150,
        width:150,
    }
})