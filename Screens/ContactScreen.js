import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Communications from 'react-native-communications';

const ContactScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextHeader}>เบอร์โทรติดต่อ</Text>
      <View style={{paddingTop: 60, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => Communications.phonecall('0959493994', true)}>
          <Image
            source={require('../Icons/phone-call-contact.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
        <Text style={styles.SubText}>เบอร์ที่ 1 : 0959493994</Text>
      </View>

      <View style={{paddingTop: 60, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => Communications.phonecall('0817212012', true)}>
          <Image
            source={require('../Icons/phone-call-contact.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
        <Text style={styles.SubText}>เบอร์ที่ 2 : 0817212012</Text>
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000009',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  Icon: {
    width: 120,
    height: 120,
    alignItems: 'center',
  },
  TextHeader: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  SubText: {
    fontSize: 20,
    color: '#FFFFFF',
    padding: 20,
  },
});
