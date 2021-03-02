import React from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../Component/Header'
import ButtonAdvice from '../Component/Advice/ButtonAdvice'

const AdviceScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title='คำแนะนำ' />
            <View>
                <ButtonAdvice 
                title= 'ก่อนดื่มแอลกอฮอล์'
                text= 'ก่อนดื่มแอลกอฮอล์' 
                text1= 'อาหารและผลิตภัณฑ์ต่าง ๆ'
                onPress={() => navigation.navigate('Before')}/>

                <View style={styles.line}/>

                <ButtonAdvice 
                title= 'หลังดื่มแอลกอฮอล์'
                text= 'หลังดื่มแอลกอฮอล์' 
                text1= 'อาหาร เครื่องดื่ม และกิจกรรมต่าง ๆ'
                onPress={() => {navigation.navigate('After');}}/>

            </View>
        </View>
    )
}

export default AdviceScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'black',
    },
    line: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: 500,
        height: 2
    }

})