import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Item,Input} from 'native-base'

const FormInput = ({labelValue,placeholderText,box, ...props}) => {
    return (
        <View>
            <Item rounded style={styles.RoundedForm}>
               <Input value={labelValue} style={[styles.textInput,box]} placeholder={placeholderText} {...props} />
            </Item>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    RoundedForm:{
        borderColor:'#fbd343',
        borderRadius:20,
        margin:25,

    },
    textInput:{
        color:'white',
        fontFamily:'Delius-Regular'
    }
})
