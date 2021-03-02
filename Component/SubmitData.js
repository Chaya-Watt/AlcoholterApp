import firestore from '@react-native-firebase/firestore';

const SubmitData = async (name,age,height,weight,phone1,phone2) => {
  firestore()
    .collection('posts')
    .doc("Profile")
    .set({
      Name: name,
      Age: age,
      Height: height,
      Weight: weight,
      Phone1: phone1,
      Phone2: phone2
    })
    .then(() => {
      console.log('post Added');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default SubmitData;
