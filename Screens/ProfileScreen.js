import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

import FormSignUp from '../Component/FormSignUp';
import FormInput from '../Component/FormInput';
import SubmitData from '../Component/SubmitData';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {AuthContext} from '../Navigation/AuthProvider';
import { useEffect } from 'react/cjs/react.development';

const ProfileScreen = ({navigation}) => {
  const [userData,setUserData] = useState(null);
  const {user, logout} = useContext(AuthContext);
  const [uploading,setUploading] = useState(false)
  const [transferred,setTransferred] =useState(0);
  const [image,setImage] = useState(null)


  const getUser = async()=>{
    const currentUser = await firestore()
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

  const handleUpdate = async()=>{
    let imgUrl = await uploadImage();

    if( imgUrl == null && userData.usetImg){
      imgUrl = userData.userImg
    }

     firestore()
     .collection('users')
     .doc(user.uid)
     .update({
       fname: userData.fname,
       age: userData.age,
       height:userData.height,
       weight:userData.weight,
       phone1:userData.phone1,
       phone2:userData.phone2,
       userImg: imgUrl,
     })
     .then(()=>{
       console.log('User Updated!')
       Alert.alert(
         'Profile Update!',
         'Your profile has been updated successfully'
       )
     })
  }

  const uploadImage = async () => {
    if(image == null){
      return null
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    //Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    //Set Transferred State
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();
      setUploading(false);
      setImage(null);
      // Alert.alert(
      //   'Post published!',
      //   'Your post has been published Successfully!!',
      // );
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(()=>{
    getUser();
  },[])

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
        <View style={styles.ContainerScreen}>
          <BottomSheet
            ref={this.bs}
            snapPoints={[330, 0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          />
          <Animated.View style={[styles.PositionForm,{opacity: Animated.add(0.3, Animated.multiply(this.fall, 1.0))}]}>
            <Text style={styles.HeaderText}>User Profile</Text>
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
            <Text style={{color:"#ffffff"}}>{user.uid}</Text>

            <View style={{flexDirection: 'row', marginTop: 25}}>
              <FontAwesome
                name="user-o"
                size={20}
                style={{color: '#ffffff', paddingTop: 23, paddingRight: 18}}
              />
              <FormInput
                labelValue={userData ? userData.fname:''}
                onChangeText={(txt) => setUserData({...userData,fname:txt})}
                placeholderText="Name"
                outbox={{marginTop: 10, width: 250}}
                box={{textAlign: 'center'}}
              />
            </View>

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
          </Animated.View>

          <View style={{flexDirection: 'row', marginTop: 25,marginLeft:20}}>
            <Feather
              name="phone"
              size={20}
              style={{color: '#ffffff', paddingTop: 23, paddingRight: 15}}
            />
            <FormInput
              placeholderText="Phone Number 1"
              labelValue={userData ? userData.phone1:''}
              onChangeText={(txt) => setUserData({...userData,phone1:txt})}
              outbox={{marginTop: 10, width: 300}}
              box={{textAlign: 'center'}}
              keyboardType="number-pad"
            />
          </View>

          <View style={{flexDirection: 'row',marginLeft:20}}>
            <Feather
              name="phone"
              size={20}
              style={{color: '#ffffff', paddingTop: 23, paddingRight: 15}}
            />
            <FormInput
              placeholderText="Phone Number 2"
              labelValue={userData ? userData.phone2:''}
              onChangeText={(txt) => setUserData({...userData,phone2:txt})}
              outbox={{marginTop: 10, width: 300}}
              box={{textAlign: 'center'}}
              keyboardType="number-pad"
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fbd343',
                borderRadius: 15,
                width: 150,
                height: 50,
                margin:5
              }}
              onPress={handleUpdate}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 20,
                  fontFamily: 'Delius-Regular',
                  width: 150,
                  height: 50,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                }}>
                Finish
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ContainerScreen: {
    flex: 1,
    backgroundColor: '#000009',
  },
  HeaderText: {
    fontSize: 35,
    fontFamily: 'Delius-Regular',
    color: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 15,
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    width: 200,
  },
  panel: {
    padding: 25,
    backgroundColor: '#000009',
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
    fontFamily: 'Delius-Regular',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
    fontFamily: 'Delius-Regular',
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color:'#ffffff',
    fontFamily: 'Delius-Regular',
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
});
