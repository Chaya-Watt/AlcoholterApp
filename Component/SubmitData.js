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
    })
    .then(() => {
      console.log('post Added');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default SubmitData;
