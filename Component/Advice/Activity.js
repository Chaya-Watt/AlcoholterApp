import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
const Activity = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>ออกกำลังกายขับแอลกอฮอล์</Text>
            <Text style={styles.subtext}>วิ่งสักนิด วิดพื้นสักหน่อยเพื่อให้มีเหงื่อออก</Text>
            <Text style={styles.subtext}>เพราะเหงื่อจะขับเอาแอลกอฮอล์ออกมา</Text>
            <Image source={require('../../Pictures/AfterAdvice/run.jpg')} style={styles.picture}/>

            <Text style={styles.text}>แปรงฟันหรือบ้วนปากด้วยน้ำสะระแหน่</Text>
            <Image source={require('../../Pictures/AfterAdvice/toothbrush.png')} style={styles.picture1}/>

            <Text style={styles.text}>น้ำยาบ้วนปาก</Text>
            <Text style={styles.subtext}>กลิ่นของน้ำยาบ้วนปากอาจจะช่วยดับกลิ่นของ</Text>
            <Text style={styles.subtext}>แอลกอฮอล์ในช่องปากได้</Text>
            <Image source={require('../../Pictures/AfterAdvice/mouth-wash.jpg')} style={styles.picture}/>

            <Text style={styles.text}>เคี้ยวหมากฝรั่ง</Text>
            <Image source={require('../../Pictures/AfterAdvice/gum.png')} style={styles.picture}/>

            <Text style={styles.text}>เช็ดตัวด้วยผ้าเปียก</Text>
            <Image source={require('../../Pictures/AfterAdvice/chedtua.png')} style={styles.picture1}/>

            <Text style={styles.text}>อาบน้ำ</Text>
            <Image source={require('../../Pictures/AfterAdvice/shower.png')} style={styles.picture1}/>

            <View style={{marginBottom: 100}}/>
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        margin: 20,
        flex:1,
        width:800,
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
    },
})