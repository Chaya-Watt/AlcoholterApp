import React, { useState,useEffect,useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DeleteButton from './DeleteButton'
// import {AuthContext} from '../Navigation/AuthProvider';
import moment from 'moment'

const ListItem = ({item,trigger}) => {

  // useEffect(()=>{
  //   console.log('trigger: ',trigger)
  // },[])

  // const {user, logout} = useContext(AuthContext);
  const [userValues, setUserValues] = useState(null);

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{moment(item.Time.toDate()).calendar()}</Text>
        <Text style={styles.listItemText}>{item.Detail}</Text>
        <Text style={styles.listItemText}>{item.Cost}</Text>
       
          <DeleteButton item={item} trigger={trigger}/>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;