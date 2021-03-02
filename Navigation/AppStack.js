import React,{useState,useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LawScreen from '../Screens/LawScreen'

const Stack = createStackNavigator();

const AppStack = () => {

  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Law"
        component={LawScreen}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
