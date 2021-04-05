import React,{useState,useContext,useEffect} from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image,Alert,Modal,Pressable } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../Navigation/AuthProvider';

const AddItem = ({History,navigation,trigger}) => {
    const [userValues,setUesrValues] = useState({Detail:'',Cost:''});
    const [text, setText] = useState([]);
    const [cost,setCost] = useState([]);
    const {user} = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    //Date pinker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [showDate,setShowDate] = useState('')
    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
    setShowDate (moment(date).format('MMMM Do YYYY'))
    console.log("A date has been picked: ", date);
    hideDatePicker();
    };

    const confirmAdd = ()=>{
      Alert.alert(
        'บันทึกประวัติค่าใช้จ่าย',
        'เมื่อบันทึกค่าใช้จ่ายแล้วจะไม่สามารถลบหรือแก้ไขได้ คุณแน่ใจหรือไม่ว่าต้องการบันทึก?',
        [
          {
            text: 'ยกเลิก',
            onPress: () => console.log('Cancel Pressed!'),
            style: 'cancel',
          },
          {
            text: 'บันทึก',
            onPress: () => handleUpdate(),
          },
        ],
        {cancelable: false},
      );
    }

    const handleUpdate = async()=>{

         firestore()
        .collection('values')
        .doc(user.email)
        .update({
          History:firestore.FieldValue.arrayUnion({...userValues,Time:firestore.Timestamp.fromDate(new Date())})
        })
        .then(()=>{
          console.log('User Updated!')
          Alert.alert(
            'Values UpDate!',
            'Your Values has been updated successfully'
          )
          trigger.setTrigger(!trigger.trigger)
          setUesrValues('')
        })
        .catch((error)=>{
           console.log(error)
        })
    }

    const updateTime =()=>{
      setUesrValues({...userValues,Time:firestore.Timestamp.fromDate(new Date())})
    }

  return(
    <View style={{marginTop: 20}}>
        <Text style={styles.btext}>วัน/เดือน/ปี  :</Text>
        <TouchableOpacity style={styles.button} onPress={updateTime} >
          <Image style={{width:40,height:40}} source={require('../../Icons/calendar.png')} />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={styles.daytext}>{showDate}</Text>
        <Text style={styles.btext}>รายละเอียด : </Text>
        <TextInput 
          value ={userValues.Detail}
          placeholder='' 
          maxLength={20}
          placeholderTextColor = "white"
          style={styles.input1}
          onChangeText={textValue => setUesrValues({...userValues,Detail:textValue})} />
        <Text style={styles.btext}>ค่าใช้จ่าย  : </Text>
        <TextInput
          value ={userValues.Cost}
          keyboardType = 'numeric'
          placeholder='' 
          placeholderTextColor = "white"
          style={styles.input2}
          onChangeText={costValue => setUesrValues({...userValues,Cost:costValue})} />
        <TouchableOpacity style={styles.btn} 
            onPress={confirmAdd}>
            <Text style={styles.btnText}>
              บันทึก
            </Text>
        </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({
btext: {
  marginTop:20,
  marginLeft: 40,
  fontSize: 22,
  color: 'white'
},
button: {
  marginTop: -30,
  marginLeft: 175
},
input1: {
  marginTop: -35,
  marginLeft: 175,
  height: 45,
  width: 200,
  fontSize: 18,
  borderColor: '#FBD343',
  borderWidth: 1,
  color:'white',
  borderRadius: 10
},
input2: {
  marginTop: -35,
  marginLeft: 175,
  height: 45,
  width: 200,
  fontSize: 18,
  borderColor: '#FBD343',
  borderWidth: 1,
  color:'white',
  borderRadius: 10
},
btn: {
  marginTop: 20,
  //backgroundColor: '#79994a',
  backgroundColor: '#0b6623',
  padding:9,
  margin: 5
},
btnText: {
  color: 'white',
  fontSize:22,
  textAlign: 'center'
},
daytext: {
  marginTop: -40,
  marginLeft: 225,
  color: 'white',
  fontSize: 22,
  
},
  
})

export default AddItem;