import React,{useState,useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LawScreen from '../Screens/LawScreen'
import ContactScreen from '../Screens/ContactScreen'
import AdviceScreen from '../Screens/AdviceScreen'
import BeforeAdvice from '../Screens/BeforeAdvice'
import AfterAdvice from '../Screens/AfterAdvice'


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
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Advice"
        component={AdviceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Before"
        component={BeforeAdvice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="After"
        component={AfterAdvice}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
