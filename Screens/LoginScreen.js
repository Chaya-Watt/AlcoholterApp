import React, {useState,useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FormInput from '../Component/FormInput';
import FormButton from '../Component/FormButton';
import SocialButton from '../Component/SocialButton';
import { AuthContext } from '../Navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext)

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Appname}> Alcoholtor</Text>
          </View>
          <Text style={styles.Subtext}>Login to your Accout</Text>
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
          <TouchableOpacity
            transparent
            style={{alignSelf: 'flex-end', marginRight: 20, marginBottom: 20}}>
            <Text
              style={{
                color: '#FBD343',
                fontFamily: 'Delius-Regular',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FormButton
              ButtonTitle="Sign In"
              onPress={() => login(email,password)}
            />
            <Text
              style={{
                fontFamily: 'Delius-Regular',
                alignSelf: 'center',
                color: '#FBD343',
                marginBottom: 25,
              }}>
              OR
            </Text>
            <SocialButton
              Icon={require('../Icons/beer.png')}
              Title="Create Accout"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000009',
    padding: 30,
  },
  Appname: {
    fontFamily: 'Delius-Regular',
    fontSize: 60,
    color: '#fbd343',
    paddingBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Subtext: {
    fontFamily: 'Delius-Regular',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
});
