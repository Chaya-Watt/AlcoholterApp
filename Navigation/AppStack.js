import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


import DrawerContent from '../Component/DrawerContent'
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import LawScreen from '../Screens/LawScreen'
import ContactScreen from '../Screens/ContactScreen'
import AdviceScreen from '../Screens/AdviceScreen'
import BeforeAdvice from '../Screens/BeforeAdvice'
import AfterAdvice from '../Screens/AfterAdvice'
import ExpenseScreen from '../Screens/ExpenseScreen'

const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LawStack = createStackNavigator();
const ContactStack = createStackNavigator();
const AdviceStack = createStackNavigator();
const BeforeStack = createStackNavigator();
const AfterStack = createStackNavigator();
const ExpenseStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator>
  <ProfileStack.Screen 
    name= "Profile" 
    component={ProfileScreen} 
    
    options={{
      headerShown: false,
    }}
    />
  </ProfileStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
  <HomeStack.Screen 
    name= "Home" 
    component={HomeScreen} 
    
    options={{
      headerShown: false,
    }}
    />
  </HomeStack.Navigator>
);

const LawStackScreen = ({navigation}) => (
  <LawStack.Navigator>
  <LawStack.Screen 
    name= "Law" 
    component={LawScreen} 
    
    options={{
      headerShown: false,
    }}
    />
  </LawStack.Navigator>
);

const ContactStackScreen = ({navigation}) => (
  <ContactStack.Navigator>
  <ContactStack.Screen 
    name= "Contact" 
    component={ContactScreen} 
    
    options={{
      headerShown: false,
    }}
    />
  </ContactStack.Navigator>
);

const AdviceStackScreen = ({navigation}) => (
  <AdviceStack.Navigator>
  <AdviceStack.Screen 
    name= "Advice" 
    component={AdviceScreen} 
    
    options={{
      headerShown: false,
    }}
    />
  </AdviceStack.Navigator>
);

const BeforeStackScreen = ({navigation}) => (
  <BeforeStack.Navigator>
  <BeforeStack.Screen 
    name= "Before" 
    component={BeforeAdvice} 
    
    options={{
      headerShown: false,
    }}
    />
  </BeforeStack.Navigator>
);

const AfterStackScreen = ({navigation}) => (
  <AfterStack.Navigator>
  <AfterStack.Screen 
    name= "After" 
    component={AfterAdvice} 
    
    options={{
      headerShown: false,
    }}
    />
  </AfterStack.Navigator>
);

const ExpenseStackScreen = ({navigation}) => (
  <ExpenseStack.Navigator>
  <ExpenseStack.Screen 
    name= "Expense" 
    component={ExpenseScreen} 
    
    options={{
      headerShown: false,
    }}
    />
  </ExpenseStack.Navigator>
);



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator 
        drawerStyle={{
          backgroundColor: '#C4C4C4',
          width: 240,
        }}
        drawerContent={props => <DrawerContent {...props}/> } 
      >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Law" component={LawStackScreen} />
        <Drawer.Screen name="Contact" component={ContactStackScreen} />
        <Drawer.Screen name="Advice" component={AdviceStackScreen} />
        <Drawer.Screen name="Before" component={BeforeStackScreen} />
        <Drawer.Screen name="After" component={AfterStackScreen} />
        <Drawer.Screen name="Expense" component={ExpenseStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}