import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from '../Component/Header';
import ListItem from '../Component/Expense/ListItem';
import uuid from 'uuid-random';
import AddItem from '../Component/Expense/AddItem';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../Navigation/AuthProvider';

const ExpenseScreen = ({navigation, route}) => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);
  const [button, setButton] = useState(false);
  const [trigger,setTrigger] = useState(false);
  
  // const fetchValues = async () => {
  //   try {
  //     const list = []; //Create Empty Array for get data from firestore

  //     await firestore()
  //       .collection('values')
  //       .where('userId', '==', route.params ? route.params.userId : user.uid)
  //       .orderBy('postTime', 'desc')
  //       .get()
  //       .then((querySnapshot) => {
  //         // console.log('Total users: ', querySnapshot.size);
  //         querySnapshot.forEach((doc) => {
  //           const {
  //             userId, //get data post from firestore
  //             Cost,
  //             Detail,
  //             postTime,
  //           } = doc.data(); //querysnapshot data field firestore
  //           list.push({
  //             // Add doc.data to list empty array
  //             id: doc.id,
  //             userId,
  //             Cost,
  //             Detail,
  //             postTime,
  //           });
  //         });
  //       });

  //     setValues(list);

  //     if (loading) {
  //       setLoading(false);
  //     }

  //     console.log('Values :', values);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchValues();
  //   navigation.addListener('focus', () => setLoading(!loading));
  // }, [navigation, loading]);

  // useEffect(() => {
  //   console.log('Values: ', values);
  // }, [values]);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        await firestore()
          .collection('values')
          .doc(user.email)
          .get()
          .then((querySnapshot) => {
            const { History } = querySnapshot.data();
            console.log('QuerySnapshot Data: ',History)
            setValues(History.reverse());
          });

        if (loading) {
          setLoading(false);
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchValues();
  }, [trigger]);

  return (
    <View style={styles.container}>
      <Header title="ประวัติรายจ่าย" />
      <AddItem History={values} navigation={navigation} trigger={{trigger,setTrigger}}/>
      <View
        style={{
          height: 60,
          width: 800,
          backgroundColor: '#C4C4C4',
          marginTop: 20,
        }}>
        <Text
          style={{fontSize: 18, color: 'black', marginTop: 8, marginLeft: 285}}>
          ค่าใช้จ่าย
        </Text>
        <Text style={{fontSize: 18, color: 'black', marginLeft: 305}}>บาท</Text>
      </View>
      <FlatList
        data={values}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={(item) => item.Time.toString()}
        // inverted={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ExpenseScreen;


