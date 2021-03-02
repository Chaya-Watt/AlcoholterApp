import {Share} from 'react-native'

const ShareText = async (Data) => {
        try {
          const result = await Share.share({
            message: Data + ' อาการ...',
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
