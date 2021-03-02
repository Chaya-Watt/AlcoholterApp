import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../Navigation/AuthProvider';
import FormInput from '../Component/FormInput';
import FormButton from '../Component/FormButton';
import FormSignUp from '../Component/FormSignUp'
import SubmitData from '../Component/SubmitData'

const SignupScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [phone1, setPhone1] = useState();
  const [phone2, setPhone2] = useState();
  const {user} = useContext(AuthContext);

  const {register} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <Text style={styles.HeaderText}>Create Account</Text>
          <View style={styles.PositionForm}>
            <FormInput
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText="Email"
              keyboardType="email-address"
            />
            <FormInput
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText="Password"
              secureTextEntry={true}
            />
            <FormInput
              labelValue={confirmPassword}
              onChangeText={(userConfirmPassword) =>
                setConfirmPassword(userConfirmPassword)
              }
              placeholderText="Comfirm Password"
              secureTextEntry={true}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.TextSex}>Sex</Text>
            <TouchableOpacity
              onPress={() => {
                alert('Boy');
              }}>
              <Image
                source={require('../Icons/boy.png')}
                style={{height: 60, width: 60}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('Girl');
              }}>
              <Image
                source={require('../Icons/girl.png')}
                style={{height: 60, width: 60, marginLeft: 60}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ContainerScreen2}>
            <View style={styles.PositionForm2}>
              <Text style={styles.HeaderText2}>Create Profile</Text>
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
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FormButton
              ButtonTitle="Sign Up"
              onPress={() => {
                register(email, password);
                SubmitData(name, age, height, weight, phone1, phone2);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 20,
  },
  PositionForm: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '105%',
  },
  HeaderText: {
    fontSize: 35,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    alignSelf: 'center',
    margin: 20,
  },
  TextSex: {
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    marginLeft: 20,
    fontSize: 25,
    marginRight: 50,
    marginTop: 15,
  },
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
    margin: 20,
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
