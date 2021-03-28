import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

const ButtonAlcohol = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{marginLeft: 28,marginTop:26}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible);}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>เมาแค่ไหน?</Text>
            <Text style={styles.modalText1}>mg%     อาการที่ร่างกายแสดงออก</Text>
            <Text style={styles.modalText2}>30                   ร่าเริงกว่าปกติ</Text>
            <Text style={styles.modalText2}>50            ควบคุมการเคลื่อนไหว</Text>
            <Text style={{fontSize:20,marginLeft:140}}>ได้ไม่ปกติ</Text>
            <Text style={styles.modalText2}>100                เดินไม่ตรงทาง</Text>
            <Text style={styles.modalText2}>200            สับสน พูดไม่รู้เรื่อง</Text>
            <Text style={styles.modalText2}>300                  ง่วง อาเจียน</Text>
            <Text style={styles.modalText2}>400             สลบและถึงตายได้</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>ปิด</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <Image
                source={require('../Icons/information.png')}
                style={{
                  width: 18,
                  height: 18
                }}
              />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:80,
    height:40,
    marginTop:5,
    marginLeft:100
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 22,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalText1: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalText2: {
    fontSize:20,
    marginLeft:5
  }
});

export default ButtonAlcohol;