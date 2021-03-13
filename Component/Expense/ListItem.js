import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DeleteButton from './DeleteButton'

const ListItem = ({ item, deleteItem}) => {

  console.log(item)

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.showDate}</Text>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Text style={styles.listItemText}>{item.cost}</Text>
       
          <DeleteButton item={item} deleteItem={deleteItem}/>
        
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