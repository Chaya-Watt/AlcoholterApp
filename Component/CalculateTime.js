import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
   
const CalculateTime = ({Data})=> {

  const time = (Data-50)/16.5;
  // const test = time;
   
  return (
    <View>
        {(() => {
            if ( time <= 0) {
              return (
                <Text style={styles.container}>-</Text>
              )
            } 
            else if (time > 0 && time <= 0.303) {
              return (
                <Text style={styles.container}>รออีกประมาณ 20 นาที</Text>
              )
            } 
            else if (time > 0.303 && time <= 0.606) {
              return (
                <Text style={styles.container}>รออีกประมาณ 40 นาที</Text>
              )
            }
            else if (time > 0.606 && time <= 0.909) {
              return (
                <Text style={styles.container}>รออีกประมาณ 1 ชั่วโมง</Text>
              )
            }
            else if (time > 0.909 && time <= 1.212) {
              return (
                <Text style={styles.container}>รออีกประมาณ 1 ชั่วโมง 10 นาที</Text>
              )
            }
            else if (time > 1.212 && time <= 1.515) {
              return (
                <Text style={styles.container}>รออีกประมาณ 1 ชั่วโมง 30 นาที</Text>
              )
            }
            else if (time > 1.515 && time <= 2.121) {
              return (
                <Text style={styles.container}>รออีกประมาณ 2 ชั่วโมง</Text>
              )
            }
            else if (time> 2.121 && time <= 2.424 ) {
              return (
                <Text style={styles.container}>รออีกประมาณ 2 ชั่วโมง 30 นาที</Text>
              )
            }
            else if (time > 2.424 && time <= 3.030) {
              return (
                <Text style={styles.container}>รออีกประมาณ 3 ชั่วโมง</Text>
              )
            }
            else {
              return (
                <Text style={styles.container}>ปริมาณแอลกอฮอล์ของคุณมากเกินไป รอมากกว่า 3 ชั่วโมง</Text>
              )
            }
        })()}
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
    color: '#ffffff',
  },
  container1: {
    fontSize: 15,
    color: '#FF0000',
  }

});

   
export default CalculateTime;