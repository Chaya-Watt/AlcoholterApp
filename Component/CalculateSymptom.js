import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
   
const Symptom= ({Data}) => {
    if (Data < 30) {
        const symptom = 'ปกติ'
        return symptom
      } 
      else if (Data >= 30 && Data < 50 ) {
        const symptom = 'ร่าเริงกว่าปกติ'
        return symptom
      } 
      else if (Data >= 50 && Data < 100) {
        const symptom = 'ควบคุมการเคลื่อนไหวได้ไม่ปกติ'
        return symptom
      }
      else if (Data >= 100 && Data < 200) {
        const symptom = 'เดินไม่ตรงทาง'
        return symptom
      }
      else if (Data >= 200 && Data < 300) {
        const symptom = 'สับสน พูดไม่รู้เรื่อง'
        return symptom
      }
      else if (Data >= 300 && Data < 400) {
        const symptom = 'ง่วง อาเจียน ไม่มีสติ'
        return symptom
      }
      else {
        const symptom = 'หมดสติ อาจถึงตายได้'
        return symptom
      }
}

export default Symptom;