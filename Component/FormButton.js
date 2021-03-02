import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'native-base';

const FormButton = ({ButtonTitle, ...props}) => {
  return (
    <View style={styles.Container}>
      <Button rounded style={styles.YellowButton} {...props}>
        <Text style={styles.TextinButton}>{ButtonTitle}</Text>
      </Button>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding:25,
  },
  YellowButton: {
    backgroundColor: '#fbd343',
    borderRadius: 15,
    width: 150,
    height:50
  },
  TextinButton :{
    color:'#FFFFFF',
    fontSize:20,
    fontFamily:'Delius-Regular',
    width:150,
    height:50,
    textAlign:'center',
    textAlignVertical:'center',
  }
});
