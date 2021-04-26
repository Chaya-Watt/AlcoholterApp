import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
   
const CalculateLaw = ({Data}) => {
    // const [law,setLaw] = useState(false);
    // if(Data < 50){
    //     lawText = ''true
    // }
    
  return (
    <View>
        {(() => {
            if (Data < 50) {
              return (
                <Text style={styles.container}>ไม่เกิน 50 mg% ไม่ผิดกฎหมาย</Text>
              )
            } 
            if (Data == 50) {
              return (
                <Text style={styles.container1}>50 mg% ผิดกฎหมาย</Text>
              )
            } 
            else  {
              return (
                <Text style={styles.container1}>เกิน 50 mg% ผิดกฎหมาย</Text>
              )
            } 
        })()}
    </View>
  );

    // return(
    //     <View>
    //         <Text style={law?styles.container1:styles.container}>{law? 'เกิน 50 mg% ผิดกฎหมาย':'ไม่เกิน 50 mg% ไม่ผิดกฎหมาย'}</Text>
    //     </View>
    // )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    color: '#24FF00',
    marginTop: 15,
    alignSelf:'center'
  },
  container1: {
    fontSize: 16,
    color: '#FF0000',
    marginTop: 15,
    alignSelf:'center'
  }

});

   
export default CalculateLaw;