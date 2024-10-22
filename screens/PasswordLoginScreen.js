import { Image } from 'expo-image';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button ,
  Image,
  TextInput,TouchableOpacity } from 'react-native';
import React, { useState,useEffect } from "react";


import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client';
// GraphQL query for login
const LOGIN_QUERY = gql`
  query Login($password: String!) {
    login(password: $password)
  }
`;



export const PasswordLoginScreen = ({navigation})=> {
  
    const [password, setPassword] = useState(''); 
  
    const { data } = useQuery(LOGIN_QUERY, {
      variables: { password },
      skip: password.length === 0,
    });
    useEffect(() => {
      if (data?.login) {
        navigation.replace('DrawerNavigator');
      }
    }, [data]);
    return (
  
      <View style={styles.container}>
  <Text style={styles.title}>Enter Password</Text>

  
  
  
    </View>
  
   
      //   <TouchableOpacity style={styles.loginBtn}
      //     onPress={() => navigation.navigate('DrawerNavigator')}>
      //     <Text style={styles.loginText}>Login</Text> 
      //   </TouchableOpacity>
      // </View>
    );
  }

  const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
       justifyContent: 'center',
    },
  
    logo : {
      width : "100%",
      marginBottom : 10,
      alignItems: 'center',
  
    }, 
    image: {
      // width : "90%",
      // backgroundColor: '#0553',
      width : "100%",
      marginBottom : 80,
      alignItems: 'center',
      position : 'relative',
      top:20
    },
    expoImage: {
      flex: 1,
      width: '100%',
      backgroundColor: '#0553',
    },
  
    inputView: {
      backgroundColor: "#d3d3d3",
      borderRadius: 30,
      width: "70%",
      height: 55,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 60,
      flex: 1,
      padding: 5,
      marginLeft: 10,
      fontSize : 20,
      borderRadius : 25,
    },
    loginBtn: {
      width: "60%",
      borderRadius: 25,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "blue",
     
    },
  
    loginText :{
      fontSize : 20,
      color :'white'
    },
    text:{
      fontSize:30,
      paddingBottom:30,
      color : "blue"
    },
    title:{
      fontSize:30,
      paddingBottom:25,
      color : "blue"
    }
   
  });

