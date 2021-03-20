import React, {useState, useContext,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../Navigation/AuthProvider';
import FormInput from '../Component/FormInput';
import FormButton from '../Component/FormButton';
import FormSignUp from '../Component/FormSignUp'
import SubmitData from '../Component/SubmitData'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [userData,setUserData] = useState(null);
  // const [uploading,setUploading] = useState(false)
  // const [transferred,setTransferred] =useState(0);
  const [image,setImage] = useState(null)

  const {register,user} = useContext(AuthContext);


  // const handleUpdate = async()=>{
  //   let imgUrl = await uploadImage();

  //   if( imgUrl == null && userData.userImg){
  //     imgUrl = userData.userImg
  //   }

  //    firestore()
  //    .collection('users')
  //    .doc(user.uid)
  //    .update({
  //      name: userData.name,
  //      age: userData.age,
  //      height:userData.height,
  //      weight:userData.weight,
  //      phone1:userData.phone1,
  //      phone2:userData.phone2,
  //      userImg: imgUrl,
  //    })
  //    .then(()=>{
  //      console.log('User Updated!')
  //      Alert.alert(
  //        'Profile Update!',
  //        'Your profile has been updated successfully'
  //      )
  //    })
  // }

  // const uploadImage = async () => {
  //   if(image == null){
  //     return null
  //   }
  //   const uploadUri = image;
  //   let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

  //   //Add timestamp to File Name
  //   const extension = filename.split('.').pop();
  //   const name = filename.split('.').slice(0, -1).join('.');
  //   filename = name + Date.now() + '.' + extension;

  //   setUploading(true);
  //   setTransferred(0);

  //   const storageRef = storage().ref(`photos/${filename}`);
  //   const task = storageRef.putFile(uploadUri);

  //   //Set Transferred State
  //   task.on('state_changed', (taskSnapshot) => {
  //     console.log(
  //       `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
  //     );
  //     setTransferred(
  //       Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
  //         100,
  //     );
  //   });

  //   try {
  //     await task;

  //     const url = await storageRef.getDownloadURL();
  //     setUploading(false);
  //     setImage(null);
  //     // Alert.alert(
  //     //   'Post published!',
  //     //   'Your post has been published Successfully!!',
  //     // );
  //     return url;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };


  const takePhotoFromCamera =()=>{
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality:0.7
    }).then(image => {
      console.log(image);
      setImage(image.path)
      this.bs.current.snapTo(1)
    });
  }

  const choosePhotoFromLibrary =()=>{
    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality:0.7
    }).then(image => {
      console.log(image);
      setImage(image.path)
      this.bs.current.snapTo(1)
    });
  }

  
  bs = React.createRef();
  fall = new Animated.Value(1);

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );


  return (
   
      <ScrollView>
        <View style={styles.Container}>
        <BottomSheet
            ref={this.bs}
            snapPoints={["150%",0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          />
          <Text style={styles.HeaderText}>Create Account</Text>
          <Animated.View style={[styles.PositionForm,{opacity: Animated.add(0.3, Animated.multiply(this.fall, 1.0))}]}>
          <TouchableOpacity
              style={{width: 100, height: 100, alignSelf: 'center'}}
              onPress={() => this.bs.current.snapTo(0)}>
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
                  source={{uri: image ? image: userData ?userData.userImg :'https://sv1.picz.in.th/images/2021/03/13/DtmGvZ.png'}}>
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
                labelValue={userData ? userData.name:''}
                onChangeText={(txt) => setUserData({...userData,name:txt})}
                placeholderText="Name"
                box={{textAlign: 'center'}}
              />
              <FormSignUp
                Title="Age :"
                Unit="Years"
                labelValue={userData ? userData.age:''}
                onChangeText={(txt) => setUserData({...userData,age:txt})}
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
                labelValue={userData ? userData.height:''}
                onChangeText={(txt) => setUserData({...userData,height:txt})}
              />
              <FormSignUp
                Title="Weight :"
                Unit="Kg"
                labelValue={userData ? userData.weight:''}
                onChangeText={(txt) => setUserData({...userData,weight:txt})}
              />
            </View>
            <Text style={styles.Text2}>เบอร์โทรติดต่อ :</Text>
            <FormInput
              placeholderText="เบอร์ติดต่อคนที่ 1"
              labelValue={userData ? userData.phone1:''}
              onChangeText={(txt) => setUserData({...userData,phone1:txt})}
            />
            <FormInput
              placeholderText="เบอร์ติดต่อคนที่ 2"
              labelValue={userData ? userData.phone2:''}
              onChangeText={(txt) => setUserData({...userData,phone2:txt})}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FormButton
              ButtonTitle="Sign Up"
              onPress={async() => {
                const regis = await register(email, password,userData,image);
                // await handleUpdate();
                // SubmitData(name, age, height, weight, phone1, phone2);
              }}
            />
          </View>
          </Animated.View>
          
        </View>
      </ScrollView>
   
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
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 75,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color:'#ffffff',
    fontFamily: 'Delius-Regular',
  },
  panel: {
    padding: 25,
    backgroundColor: '#000009',
    paddingTop: 20,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    fontFamily: 'Delius-Regular',
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#fbd343',
    alignItems: 'center',
    marginVertical: 7,
    fontFamily: 'Delius-Regular',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Delius-Regular',
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#fbd343',
    alignItems: 'center',
    marginVertical: 7,
    fontFamily: 'Delius-Regular',
  },
});
