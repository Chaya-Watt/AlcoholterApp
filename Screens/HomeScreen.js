import React, {useState,useContext} from 'react';
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
import { AuthContext } from '../Navigation/AuthProvider';

const HomeScreen = ({navigation}) => {
  const [Data, setData] = useState(0);
  const [State, setState] = useState("Don't Connect Device");
  const {user,logout} =useContext(AuthContext)

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => logout()}>
              <Thumbnail small source={require('../Pictures/Profile.jpg')} />
            </TouchableOpacity>
            <Text style={styles.TextInHeader}>
              Chayanant Watt{'\n'}
              <View style={{flexDirection: 'row'}}>
                <View style={styles.GreenIcon} />
                <Text style={styles.SubName}>Device : {State}</Text>
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
              onPress={()=> alert('Phone')}
            />
            <ButtonHomeScreen
              Icon={require('../Icons/email.png')}
              Title="ข้อความติดต่อ"
            />
            <ButtonHomeScreen
              Icon={require('../Icons/location.png')}
              Title="เปิด Google Map"
            />
          </View>
          <View style={[styles.ContainerIcon, {marginBottom: 20}]}>
            <ButtonHomeScreen
              Icon={require('../Icons/auction.png')}
              Title="กฎหมาย"
            />
            <ButtonHomeScreen
              Icon={require('../Icons/help.png')}
              Title="คำแนะนำ"
            />
            <ButtonHomeScreen
              Icon={require('../Icons/bank.png')}
              Title="ประวัติรายจ่าย"
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
