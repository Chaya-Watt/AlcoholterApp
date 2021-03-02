import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
 
const Food = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>ไข่ต้ม</Text>
            <Text style={styles.subtext}>มีหน้าที่จับสารพิษในร่างกาย</Text>
            <Image source={require('../../Pictures/AfterAdvice/egg.png')} style={styles.picture}/>

            <Text style={styles.text}>ขนมปัง</Text>
            <Text style={styles.subtext}>ช่วยดูดซับสารพิษและป้องกันการอาเจียนได้</Text>
            <Text style={styles.subtext}>เป็นอย่างดี</Text>
            <Image source={require('../../Pictures/AfterAdvice//bread.png')} style={styles.picture}/>

            <Text style={styles.text}>โจ๊ก ข้าวต้ม น้ำซุปใส</Text>
            <Text style={styles.subtext}>ช่วยลดอาการขาดน้ำของผู้ดื่มหนักและช่วยลด</Text>
            <Text style={styles.subtext}>อาการระคายเคืองในกระเพาะอาหารได้</Text>
            <Image source={require('../../Pictures/AfterAdvice/soup.png')} style={styles.picture}/>

            <Text style={styles.text}>ผลไม้ที่มีรสเปรี้ยว</Text>
            <Text style={styles.subtext}>เพื่อชดเชยวิตามินซีและเพิ่มปริมาณออกซิเจน</Text>
            <Text style={styles.subtext}>ในเลือด ชดเชยพลังงานที่ร่างกายต้องการ เช่น</Text>
            <Text style={styles.subtext}>มะม่วงดิบ มะขามเปียก</Text>
            <Image source={require('../../Pictures/AfterAdvice/mango.png')} style={styles.picture}/>

            <Text style={styles.text}>ช็อกโกแลตแท่งหรือของหวานจัด ๆ</Text>
            <Text style={styles.subtext}>ช็อกโกแลตเป็นตัวช่วยสำคัญในการล้างพิษ</Text>
            <Text style={styles.subtext}>แอลกอฮอล์ให้ออกไปจากร่างกาย</Text>
            <Image source={require('../../Pictures/AfterAdvice/chocolate.png')} style={styles.picture}/>

            <View style={{paddingBottom: 20}} />

        </View>
    )
}

export default Food

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
        marginLeft:100,
        height:140,
        width:200,
    }
})