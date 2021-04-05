import React, {useState, useContext, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../Navigation/AuthProvider';

const DeleteButton = ({item, route,trigger}) => {
 
  const [modalVisible, setModalVisible] = useState(false);
  const {user} = useContext(AuthContext);

  const deleteFirestoreData = async (postDetail) => {
    console.log('item:',item)
    console.log('postDetail:',postDetail)
    console.log('Detail: ', postDetail.Detail);
    console.log('Cost: ', postDetail.Cost);
    console.log('Time: ', postDetail.Time);

    await firestore()
      .collection('values')
      .doc(user.email)
      .update({
        History: firestore.FieldValue.arrayRemove(postDetail),
      })
      .then(() => {
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted Successfully!!',
        );
        trigger.setTrigger(!trigger.trigger)
      })

      .catch((error) => console.log('Error deleting post', error));
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ลบประวัติค่าใช้จ่าย</Text>
            <Text style={styles.modalText1}>คุณแน่ใจหรือว่าต้องการลบ?</Text>
            <Pressable
              style={[styles.button1, styles.buttonDelete]}
              onPress={() => {
                deleteFirestoreData(item);
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>ลบ</Text>
            </Pressable>
            <Pressable
              style={[styles.button2, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>ยกเลิก</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image
          source={require('../../Icons/close.png')}
          style={{
            width: 30,
            height: 30,
          }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 120,
    width: 80,
    height: 40,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: -40,
    marginLeft: -100,
    width: 80,
    height: 40,
  },
  buttonDelete: {
    backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 22,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText1: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default DeleteButton;
