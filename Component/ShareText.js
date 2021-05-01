import {Share} from 'react-native'
import Symptom from '../Component/CalculateSymptom'


const ShareText = async (Data,name) => {
        try {
          console.log('Data: ',Data)
          const text =  Symptom({Data})
          console.log('text: ',text)
          const result = await Share.share({
            message: 'คุณ '+ name +' มีระดับปริมาณแอลกอฮอล์: '+Data + ' mg% ' + ' มีอาการ: '+text,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
            } else {
            }
          } else if (result.action === Share.dismissedAction) {
          }
        } catch (error) {
          alert(error.message);
        }
}

export default ShareText
