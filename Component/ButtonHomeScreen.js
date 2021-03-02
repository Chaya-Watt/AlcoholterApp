import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ButtonHomeScreen = ({Icon, Title, ...props}) => {
  return (
    <TouchableOpacity style={{flex: 1}} {...props}>
      <View style={styles.ButtonIcon}>
        <Image source={Icon} style={styles.Icon} />
      </View>
      <Text style={styles.TextInButton}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonHomeScreen;

const styles = StyleSheet.create({
  ButtonIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#353535',
    borderRadius: 50,
  },
  Icon: {
    width: 50,
    height: 50,
  },
  TextInButton: {
    alignSelf: 'center',
    color: '#c4c4c4',
    fontSize: 12,
    marginTop:2 ,
  },
});
