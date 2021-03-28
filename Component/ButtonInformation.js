import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

const ButtonInformation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{marginLeft:28,marginTop:30}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible);}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>คำนวณเวลา</Text>
            <Text style={styles.modalText1}>วิธีการคำนวณหาระดับแอลกอฮอล์ในลมหายใจ เป็นเพียงค่าประมาณเท่านั้น ระดับแอลกอฮอล์ในลมหายใจของแต่ละคนมีความแตกต่างกัน ขึ้นอยู่กับหลายปัจจัย ยกตัวอย่างเช่น อัตราการเผาผลาญ ชนิดของเครื่องดื่ม ระยะเวลาในการดื่ม อาหารที่รับประทานก่อนดื่ม เป็นต้น</Text>
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
    alignItems: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
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
    alignItems: "center",
    marginTop:5
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
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalText1: {
    fontSize: 17,
    textAlign: "center",
  }
});

export default ButtonInformation;