import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Thumbnail} from 'native-base';
import ButtonHomeScreen from '../Component/ButtonHomeScreen';
import {AuthContext} from '../Navigation/AuthProvider';
import {BleManager} from 'react-native-ble-plx';
import base64 from 'react-native-base64';
import ShareText from '../Component/ShareText'
import openMap from 'react-native-open-maps'
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';

const manager = new BleManager();

const HomeScreen = ({navigation}) => {
  const [Data, setData] = useState(0);
  const [Device, setDevice] = useState("Don't Connect Device");
  const {user, logout} = useContext(AuthContext);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [Error, setError] = useState(null);
  const [userData,setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const GoMap =()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setError(null);
        console.log(latitude, longitude);
      },
      (error) => {
        setError(error.message);
        console.log(Error);
      },
    );
    openMap({latitude: latitude, longitude: longitude});
  }

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

  // useEffect(() => { 
  //   //Use useEffect for do onstateChange function
  //   const subscription = manager.onStateChange((state) => {
  //     manager.enable();
  //     if (state === 'PoweredOn') {
  //       console.log(state);
  //       scanAndConnect();
  //       subscription.remove();
  //     }
  //   }, true);
  //   return () => {
  //     console.log('Out');
  //     clearInterval(TimerReadData);
  //     setDevice("Device Don't Connect");
  //     manager.cancelDeviceConnection('24:0A:C4:59:39:CE');
  //     manager.disable();
  //   };
  // }, []);

  // const scanAndConnect = async () =>
  //   //Scan Device
  //   {
  //     console.log('Scan...Device');
  //     setDevice('Scan Device');
  //     manager.startDeviceScan(null, null, (error, device) => {
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
  //       if (device.name === 'ESP32 BLE') {
  //         console.log('Found', device.name);
  //         manager.stopDeviceScan();
  //         console.log('Stop Scan');
  //         setDevice(device.name);
  //         device
  //           .connect()
  //           .then((deviceDis) => {
  //             //Discover device all service and characteristics
  //             console.log('Discover All Services And Characteristics');
  //             return deviceDis.discoverAllServicesAndCharacteristics();
  //           })
  //           .then((device) => {
  //             //Have DeviceID and Send to function ReadInfoID
  //             console.log('DeviceID : ' + device.id);
  //             return ReadInfoID(device);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       }
  //     });
  //   };

  // //Read Service and Characteristic for device
  // const ReadInfoID = async (device) => {
  //   const ServicesID = await device.services();
  //   console.log('ServiceID : ' + ServicesID[2].uuid); //Check ServiceUUID

  //   const CharacteristicID = await device.characteristicsForService(
  //     ServicesID[2].uuid,
  //   );
  //   console.log('CharacteristicID : ' + CharacteristicID[0].uuid); //Check CharacteristicID
  //   TimerReadData(device, ServicesID[2].uuid, CharacteristicID[0].uuid);
  // };

  // //Read Data for device
  // const TimerReadData = async (device, Service, Characteristic) => {
  //   setInterval(async () => {
  //     const Data = await device.readCharacteristicForService(
  //       Service,
  //       Characteristic,
  //     );
  //     const realData = Math.floor(base64.decode(Data.value));
  //     console.log('Value : ' + realData);
  //     setData(realData);
  //   }, 5000);
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => logout()}>
              <Thumbnail small source={{uri: userData ? userData.userImg : 'https://sv1.picz.in.th/images/2021/03/13/DtmGvZ.png'}} />
            </TouchableOpacity>
            <Text style={styles.TextInHeader}>
              {userData ? userData.name:'Click Profile to Edit'}{'\n'}
              <View style={{flexDirection: 'row'}}>
                <View style={styles.GreenIcon} />
                <Text style={styles.SubName}>Device : {Device}</Text>
              </View>
            </Text>
          </View>

          <Text
            style={{
              color: '#FBD343',
              alignSelf: 'center',
              margin: 25,
              fontSize: 16,
            }}>
            ระดับแอลกอฮอล์ในเลือด (หน่วย mg%)
          </Text>

          <View style={styles.GrayCircle}>
            <Text style={styles.TextInCircle}>{Data}</Text>
          </View>

          <Text style={styles.TextAleart}>ไม่เกิน 50 mg% ไม่ผิดกฎหมาย</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.TextYellow}>คำนวนเวลา :</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../Icons/information.png')}
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 30,
                  marginLeft: 260,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.TextYellow, {marginBottom: 10}]}>อาการ :</Text>
          <View style={styles.ContainerIcon}>
            <ButtonHomeScreen
              Icon={require('../Icons/phone-call.png')}
              Title="โทรศัพท์ติดต่อ"
              onPress={() => navigation.navigate('Contact')}
            />
            <ButtonHomeScreen
              Icon={require('../Icons/email.png')}
              Title="ข้อความติดต่อ"
              onPress={()=>{ShareText(Data)}}
            />
            <ButtonHomeScreen
              Icon={require('../Icons/location.png')}
              Title="เปิด Google Map"
              onPress={()=>GoMap()}
            />
          </View>
          <View style={[styles.ContainerIcon, {marginBottom: 20}]}>
            <ButtonHomeScreen
              Icon={require('../Icons/auction.png')}
              Title="กฎหมาย"
              onPress={() => {navigation.navigate('Law');}}
            />
            <ButtonHomeScreen
              Icon={require('../Icons/help.png')}
              Title="คำแนะนำ"
              onPress={() => {navigation.navigate('Advice');}}
            />
            <ButtonHomeScreen
              Icon={require('../Icons/bank.png')}
              Title="ประวัติรายจ่าย"
              onPress={() => {navigation.navigate('Expense');}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 10,
  },
  TextInHeader: {
    fontFamily: 'Delius-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 3,
  },
  GreenIcon: {
    width: 8,
    height: 8,
    backgroundColor: '#24FF00',
    borderRadius: 360,
    marginTop: 3,
    marginRight: 4,
  },
  SubName: {
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    fontSize: 11,
  },
  GrayCircle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 180,
    backgroundColor: '#C4C4C4',
    margin: 10,
  },
  TextInCircle: {
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 50,
    fontFamily: 'Delius-Regular',
  },
  TextAleart: {
    color: '#24FF00',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 10,
  },
  TextYellow: {
    color: '#FBD343',
    marginLeft: 20,
    fontSize: 14,
    marginTop: 25,
    alignItems: 'stretch',
  },
  ContainerIcon: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 5,
  },
});
