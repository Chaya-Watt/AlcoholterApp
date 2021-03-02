import React, { useState } from 'react'
import {View,StyleSheet} from 'react-native'
import Swiper from 'react-native-swiper'
import Header from '../Component/Header'
import HeaderLaw from '../Component/Law/HeaderLaw'
import DetialLaw from '../Component/Law/DetialLaw'
import EndLaw from '../Component/Law/EndLaw'

const LawScreen = ({navigation}) => {

  return(
  <View  style={styles.container}>
    <Header title='กฎหมาย'/>
    <Swiper
    dot={<View style={styles.Dot}/>}
    activeDot={<View style={styles.ActiveDot}/>}
    paginationStyle={{bottom: 70}}
    loop={false}> 

    <View>
      <HeaderLaw 
      title1='กฎหมายเมาแล้วขับ'
      title2='ค่าปรับเท่าไหร่รับโทษอย่างไรบ้าง ?'

      line1='ตาม พ.ร.บ. จราจรทางบก พ.ศ. 2522'
      line2='มาตรา 43 ได้ระบุห้ามมิให้ขับรถในขณะเมาสุรา'
      line3='หรือของมึนเมาอื่น ๆ และมีการเพิ่มโทษให้หนักขึ้น'
      line4='กับ พ.ร.บ. จราจรทางบก ฉบับที่ 7 พ.ศ. 2550 '
      line5='โดยกำหนดโทษของการเมาแล้วขับ '
      line6='สามารถแบ่งตามข้อหาได้ทั้งหมด 3 ข้อ ดังนี้ '

      picture = {require('../Icons/Law/beer.png')}/>
    </View>

    <View>
      <DetialLaw 
      title1='เมาแล้วขับ'
      title2='เป็นเหตุให้ผู้อื่นได้รับอันตราย'
      title3='แก่ร่างกายและจิตใจ'

      line1='ผู้ใดเมาแล้วขับ และเป็นเหตุให้ผู้อื่นได้รับอันตราย'
      line2='หรือได้รับบาดเจ็บทางร่างกายและจิตใจ'
      line3='- มีโทษจำคุก 1-5 ปี'
      line4='- ปรับตั้งแต่ 20,000-100,000 บาท'
      line5='หรือทั้งจำทั้งปรับ'
      line6='- ศาลสามารถสั่งพักใช้ใบขับขี่ไม่น้อยกว่า'
      line7='1 ปีหรือเพิกถอนใบขับขี่'

      picture = {require('../Icons/Law/heartbroken.png')}/>
    </View>

    <View>
      <DetialLaw 
      title1='เมาแล้วขับ'
      title2='เป็นเหตุให้ผู้อื่นได้รับอันตรายสาหัส'

      line1='ผู้ใดเมาแล้วขับ และเป็นเหตุให้ผู้อื่นได้รับอันตราย '
      line2='สาหัส  เช่น สูญเสียอวัยวะ หรือทุพพลภาพ'
      line3='- มีโทษจำคุก 2-6 ปี'
      line4='- ปรับตั้งแต่ 40,000-120,000 บาท'
      line5='หรือทั้งจำทั้งปรับ'
      line6='- ศาลสามารถสั่งพักใช้ใบขับขี่ไม่น้อยกว่า'
      line7='2 ปี หรือเพิกถอนใบขับขี่'

      picture = {require('../Icons/Law/patient.png')}/>
    </View>

    <View>
      <DetialLaw 
      title1='เมาแล้วขับ'
      title2='เป็นเหตุให้ผู้อื่นถึงแก่ความตาย'

      line1='ผู้ใดเมาแล้วขับ และเป็นเหตุให้ผู้อื่นถึงแก่ความตาย'
      line3='- มีโทษจำคุก 3-10 ปี'
      line4='- ปรับตั้งแต่ 60,000-200,000 บาท '
      line5='หรือทั้งจำทั้งปรับ'
      line6='- ศาลสามารถสั่งเพิกถอนใบขับขี่'

      picture = {require('../Icons/Law/tombstone.png')}/>
    </View>

    <View>
      <EndLaw/>
    </View>
    
    </Swiper>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
  },
  Dot: {
    backgroundColor: '#C4C4C4',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },
  ActiveDot: {
    backgroundColor: '#FBD343',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7
  },

})

export default LawScreen;