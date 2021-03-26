import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        register: async (email, password,userData,image) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.email)
                  .set({
                    name: userData.name,
                    email: email,
                    createAt: firestore.Timestamp.fromDate(new Date()),
                    age: userData.age,
                    height: userData.height,
                    weight: userData.weight,
                    phone1: userData.phone1,
                    phone2: userData.phone2,
                    userImg:
                      image,
                  })
                  .then((f)=>{
                    console.log("Sucess",f)
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
          } catch (error) {
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
