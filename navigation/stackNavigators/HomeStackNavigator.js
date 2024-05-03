import React, { useState , useCallback, useEffect } from "react";
import { SafeAreaView,ImageBackground,View,FlatList,Dimensions,Image, StyleSheet,Text,StatusBar,Button,TouchableOpacity,TextInput,ActivityIndicator} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()


import { AntDesign } from '@expo/vector-icons';
import { translation } from "../../i18n/supportedLanguages";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import Constants from 'expo-constants';
import { Card } from '@rneui/themed';
import logo from '../../assets/warehouse.png'



import { useQuery } from "@apollo/client";
import { DEPARTMENTS_QUERY } from "../../gql/Query";
const i18n = new I18n(translation)
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
// i18n.locale = 'ja';


// const Square = ({ text}) => (
//   <View >
//     <Text style={styles.text}>{text}</Text>
//   </View>
// );

const spacing = 5;
const width = (Dimensions.get('window').width - 2 * 10) / 2;
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
 //const image = require('../assets/logo-og.png');



const Home = ({navigation})=> {

  const {data, error, loading} = useQuery(DEPARTMENTS_QUERY);
  //console.log('data' , data)

  if (error) {
    console.error('DEPARTMENTS_QUERY error', error);
}

const DepartmentItem = ({ department}) => {
  const { title , id } = department; 
  console.log( title , id)
return(
  <TouchableOpacity  onPress={() => navigation.navigate( i18n.t(title))}>
  <View style = {styles.container1}>
  <View>
     <Text style={{fontSize:15 , fontWeight:"bold" , marginRight:8 }}> {i18n.t(title)}</Text>
     </View>
    <View style={styles.circle}>
    <Text style={{fontSize:15 , fontWeight:"bold" }}>25</Text>
    </View>
    </View>
    </TouchableOpacity>
 
)

};


  return (
    <View style={styles.container}>

  

    {/* <View style = {styles.image}>
    <Image  source={require('../assets/today.jpg')}
    placeholder={"rami-levi"}
        contentFit="cover"
        transition={1000} />
    </View> */}

    {/* <View style = {styles.placeholder}></View> */}

    <ImageBackground source={logo} resizeMode="cover" style={styles.image}>
    </ImageBackground>

    {loading && <Text>Loading...</Text>}
      {error && <Text>Check console for error logs</Text>}
      {!loading && !error && data && <FlatList style={styles.flatList} 
        data={data.departments}
        renderItem={({ item }) => (
          <DepartmentItem department={item} />)}
        //keyExtractor={(item, index) => index}
        keyExtractor = {(item) => item.id}
        //style={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />}
    </View>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({

  container: {
    display:'flex',
    backgroundColor: "#7CA1B4",
    flex: 1,
    //gap: '1rem',
    //flexWrap: "wrap",
    flexDirection: 'column',  
    //marginBottom: 100
  },

  circle :{
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor:'orange',
    //border: '3px solid #000',
    color: '#000',
    textAlign: 'center',
    //font: '32px Arial, sans-serif'
   
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    // paddingBottom :200,
  
  //   //  width : null,
  //   //  height : 220,
  //    backgroundColor: '#0553',
  //   aspectRatio: 1.4, 
  //   marginBottom : 80,
  //   alignItems: 'center',
  //   position : 'relative',
  //   top:30,
  //   resizeMode: 'contain'
  },
  flatList :{
    flex : 1,
  },

  column: {
    flexShrink: 1,
  },
 
  

  // text: {
  //   fontSize: 19,
  //   fontWeight: "bold",
  // },

  
  logoText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign:'center',
    top:'50%'
    
  },
  
  
    container1: {
     display:'flex',
     flexDirection:'row',
     justifyContent: 'center',
     alignItems:'center',
      width: width,
      height:80,
      margin: spacing,
      backgroundColor:"white",
       borderRadius:10,
    },
    title: {
      fontSize: 20,
    },
    
  
});

export default HomeStackNavigator