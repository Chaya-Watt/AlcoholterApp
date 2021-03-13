import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../Navigation/AuthProvider';
import FormSignUp from '../Component/FormSignUp';
import FormInput from '../Component/FormInput';
import FormButton from '../Component/FormButton';
import SubmitData from '../Component/SubmitData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const ProfileScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [phone1, setPhone1] = useState();
  const [phone2, setPhone2] = useState();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.ContainerScreen}>
          <View style={styles.PositionForm}>
            <Text style={styles.HeaderText}>User Profile</Text>
            <TouchableOpacity  style={{width:100,height:100,alignSelf:'center'}} onPress={() => {}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <ImageBackground
                  style={{
                    height: 100,
                    width: 100,
                  }}
                  imageStyle={{borderRadius: 60}}
                  source={require('../Pictures/Profile.jpg')}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <FormInput
              labelValue={name}
              onChangeText={(userName) => setName(userName)}
              placeholderText="Name"
              box={{textAlign: 'center'}}
            />
            <FormSignUp
              Title="Age :"
              Unit="Years"
              labelValue={age}
              onChangeText={(userAge) => setAge(userAge)}
              box={{
                marginTop: 10,
                width: 100,
                height: 35,
                backgroundColor: '#FBD343',
                marginRight: 30,
                marginLeft: 25,
              }}
            />
            <FormSignUp
              Title="Height :"
              Unit="Cm"
              labelValue={height}
              onChangeText={(userHeight) => setHeight(userHeight)}
            />
            <FormSignUp
              Title="Weight :"
              Unit="Kg"
              labelValue={weight}
              onChangeText={(userWeight) => setWeight(userWeight)}
            />
          </View>
          <Text style={styles.Text}>เบอร์โทรติดต่อ :</Text>
          <FormInput
            placeholderText="เบอร์ติดต่อคนที่ 1"
            labelValue={phone1}
            onChangeText={(userPhone1) => setPhone1(userPhone1)}
          />
          <FormInput
            placeholderText="เบอร์ติดต่อคนที่ 2"
            labelValue={phone2}
            onChangeText={(userPhone2) => setPhone2(userPhone2)}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FormButton
              ButtonTitle="Finish"
              onPress={() => {
                SubmitData(name, age, height, weight, phone1, phone2);
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ContainerScreen: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 20,
  },
  HeaderText: {
    fontSize: 35,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  PositionForm: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 5,
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 75,
  },
});
