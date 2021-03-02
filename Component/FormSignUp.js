import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Item, Input} from 'native-base';

const FormSignUp = ({Title, Unit, labelValue,box, ...props}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>{Title}</Text>
      <Item rounded style={[styles.InputForm,box]}>
        <Input value={labelValue} style={styles.textInput} {...props}/>
      </Item>
      <Text style={styles.Text}>{Unit}</Text>
    </View>
  );
};

export default FormSignUp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    margin:5
  },
  Text: {
    marginTop: 10,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    fontSize: 20,
    marginRight: 30,
  },
  InputForm: {
    marginTop: 10,
    width: 100,
    height: 35,
    backgroundColor: '#FBD343',
    marginRight: 30,
  },
  textInput:{
    color:'#000000',
    fontFamily:'Delius-Regular',
    textAlign:'center'
}
});
