import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { AuthContext } from '../Navigation/AuthProvider';
import FormSignUp from '../Component/FormSignUp';
import FormInput from '../Component/FormInput';
import FormButton from '../Component/FormButton';
import SubmitData from '../Component/SubmitData';

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
        <View style={styles.ContainerScreen2}>
          <View style={styles.PositionForm2}>
            <Text style={styles.HeaderText2}>Create Profile</Text>
            <FormInput
              labelValue={name}
              onChangeText={(userName) => setName(userName)}
              placeholderText="Name"
              box={{textAlign:'center'}}
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
          <Text style={styles.Text2}>เบอร์โทรติดต่อ :</Text>
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
                SubmitData(name,age,height,weight,phone1,phone2)
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
  ContainerScreen2: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 20,
  },
  HeaderText2: {
    fontSize: 35,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  PositionForm2: {
    alignSelf: 'center',
    alignContent: 'center',
    flex: 1,
  },
  Text2: {
    fontSize: 20,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 5,
  },
});
