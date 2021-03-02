import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'native-base';

const SocialButton = ({Icon,Title, ...props}) => {
  return (
    <View style={styles.Container}>
      <Button bordered style={styles.BorderButton} {...props}>
        <View style={styles.PositionInButton}>
            <Image source={Icon} style={{height:20,width:20,marginRight:8}}/>
            <Text style={styles.TextInButton}>
              {Title}
            </Text>
        </View>
      </Button>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BorderButton: {
    borderColor: '#fbd343',
    borderRadius: 20,
    width: 200,
    height:50,
    marginBottom:20
  },
  PositionInButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:190,
  },
  TextInButton:{
    fontFamily:'Delius-Regular',
    fontSize:16,
    color:'#FFFFFF'
  }
});
