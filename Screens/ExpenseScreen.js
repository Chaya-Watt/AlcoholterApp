import React, { useState } from 'react'
import {View, StyleSheet, FlatList, Text } from 'react-native'
import Header from '../Component/Header'
import ListItem from '../Component/Expense/ListItem'
import uuid from 'uuid-random'
import AddItem from '../Component/Expense/AddItem'

const ExpenseScreen = () => {

  const [items, setItems] = useState('')

  //delte item
  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  //add item
  const addItem = (showDate,text,cost) => {
    setItems(prevItems => {
      return[{id: uuid(),showDate,text,cost}, ...prevItems];
    })
  }


  return(
    <View style={styles.container}>
        <Header title='ประวัติรายจ่าย'/>
        <AddItem addItem={addItem}/>
        <View style={{height: 60, width:800,backgroundColor: '#C4C4C4',marginTop: 20}}>
          <Text style={{fontSize:18,color: 'black',marginTop: 8,marginLeft: 285}}>ค่าใช้จ่าย</Text>
          <Text style={{fontSize:18,color: 'black',marginLeft: 305}}>บาท</Text>
        </View>
        <FlatList data={items}
              renderItem={({item}) => (<ListItem item={item}
                deleteItem={deleteItem} />)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black'
  }
})

export default ExpenseScreen;