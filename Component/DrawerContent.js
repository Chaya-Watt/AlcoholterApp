import React,{useContext,useState,useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper'
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {AuthContext} from '../Navigation/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore';



const DrawerContent = (props,{navigation}) => {
    const {user, logout} = useContext(AuthContext);
    const [userData,setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    
  const getUser = async()=>{
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot)=>{
        if(documentSnapshot.exists){
          console.log('User Data',documentSnapshot.data())
          setUserData(documentSnapshot.data())
        }
      })
    }
  
    useEffect(()=>{
      getUser();
    //   navigation.addListener('focus',()=> setLoading(!loading))
    },[navigation,loading])
  

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <View>                      
                            <Avatar.Image 
                                source={{uri: userData ? userData.userImg : 'https://sv1.picz.in.th/images/2021/03/13/DtmGvZ.png'}}
                                size={50}
                                />
                            </View>
                            <View>
                                <Title style={styles.title}>{userData ? userData.name:'Click Profile to Edit'}{'\n'}</Title>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem 
                            inactiveTintColor='#000'

                            icon={({color,size}) => (
                                <Icon 
                                    name="account-edit"
                                    color='#000'
                                    size={size}
                                />
                            )}
                            label="Account edit" 
                            onPress={() => {props.navigation.navigate('Profile')}} />
                        <DrawerItem 
                            inactiveTintColor='#000'
                            icon={({color,size}) => (
                                <Icon 
                                    name="exit-to-app"
                                    color='#000'
                                    size={size}
                                />
                            )}
                            label="Sign Out" 
                            onPress={() => logout()} />

                    </Drawer.Section>
            
            </View>
            </DrawerContentScrollView>
        
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex:1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        marginLeft: 10,
        color: '#000'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems : 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3 
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#C4C4C4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})
