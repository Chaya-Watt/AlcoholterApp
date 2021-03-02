import firestore from '@react-native-firebase/firestore';

const SubmitData = async (name,age,height,weight,phone1,phone2) => {
  firestore()
    .collection('posts')
    .doc("Profile")
    .set({
    })
    .then(() => {
      console.log('post Added');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default SubmitData;
