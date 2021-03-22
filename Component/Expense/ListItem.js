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

const ListItem = ({item}) => {

  // const {user, logout} = useContext(AuthContext);
  const [userValues, setUserValues] = useState(null);

  useEffect(()=>{
    console.log(item)
  })
  

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{moment(item.postTime.toDate()).format("MMM Do YY")}</Text>
        <Text style={styles.listItemText}>{item.Detail}</Text>
        <Text style={styles.listItemText}>{item.Cost}</Text>
       
          <DeleteButton item={item}/>
        
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