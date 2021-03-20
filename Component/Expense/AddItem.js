import React,{useState} from 'react'
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const AddItem = ({addItem}) => {

    const [text, setText] = useState('');
    const [cost,setCost] = useState('');

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

  return(
    <View style={{marginTop: 20}}>
        <Text style={styles.btext}>วัน/เดือน/ปี  :</Text>
        <TouchableOpacity style={styles.button} onPress={showDatePicker} >
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
          placeholder='  ไปกินเหล้ากับเพื่อน' 
          maxLength={20}
          placeholderTextColor = "white"
          style={styles.input1}
          onChangeText={textValue => setText(textValue)} />
        <Text style={styles.btext}>ค่าใช้จ่าย  : </Text>
        <TextInput 
          keyboardType = 'numeric'
          placeholder='  585 บาท' 
          placeholderTextColor = "white"
          style={styles.input2}
          onChangeText={costValue => setCost(costValue)} />
        <TouchableOpacity style={styles.btn} 
            onPress={() => addItem(showDate,text,cost)}>
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