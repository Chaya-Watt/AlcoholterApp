import React,{useState,useEffect,useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Communications from 'react-native-communications';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';

const ContactScreen = ({navigation}) => {

  const [userData,setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {user, logout} = useContext(AuthContext);

  const getUser = async()=>{
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot)=>{
        if(documentSnapshot.exists){
          console.log('User Data',documentSnapshot.data())
          setUserData(documentSnapshot.data())
        }
      })
    }

    useEffect(()=>{
      getUser();
      navigation.addListener('focus',()=> setLoading(!loading))
    },[navigation,loading])

  return (
    <View style={styles.Container}>
      <Text style={styles.TextHeader}>เบอร์โทรติดต่อ</Text>
      <View style={{paddingTop: 60, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => Communications.phonecall(userData.phone1, true)}>
          <Image
            source={require('../Icons/phone-call-contact.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
        <Text style={styles.SubText}>เบอร์ที่ 1 : {userData? userData.phone1:''}</Text>
      </View>

      <View style={{paddingTop: 60, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => Communications.phonecall(userData.phone2, true)}>
          <Image
            source={require('../Icons/phone-call-contact.png')}
            style={styles.Icon}
          />
        </TouchableOpacity>
        <Text style={styles.SubText}>เบอร์ที่ 2 : {userData? userData.phone2:''}</Text>
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
