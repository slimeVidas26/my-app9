import React from 'react'
import {TouchableOpacity , View ,Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack'
import { EdiOrderDetailsScreenOpen } from '../../../screens/ediDcreens/EdiOrderDetailsScreenOpen'
import { EdiOrderDetailsScreenClosed } from '../../../screens/ediDcreens/EdiOrderDetailsScreenClosed'
import { EdiOrderDetailsScreenSearch } from '../../../screens/ediDcreens/EdiOrderDetailsScreenSearch'
import { EdiOrderDetailHeader } from '../../../components/headers/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator();

// function  MyTab(){
//   return(
// <View style = {{flex:1,flexDirection:'row' ,justifyContent:'space-between', alignItems:'center',backgroundColor:'red'}}>
// <View style={styles.circle}><Text style={styles.textCircle}>25</Text></View>
// <Text>Open</Text>
// </View>)
// }


function MyTabBar({ navigation }) {
  return (
    <>
    <EdiOrderDetailHeader/>
    <Tab.Navigator
    initialRouteName='EdiOrderDetailsScreenOpen'
    tabBarOptions={{
      //activeTintColor: 'tomato',
      //inactiveTintColor: 'gray',
      //showLabel: false,
      //style: {backgroundColor:'red'},
    }}
    screenOptions={{
      //tabBarActiveTintColor: "red",
      //tabBarInactiveTintColor: "blue",
      // tabBarStyle: {
         //height: 105,
      // },
      tabBarLabelStyle: {
        fontSize: 18,
        margin: 0,
      },
      tabBarStyle: {
        //height: 90,
        //paddingHorizontal: 5,
        //paddingTop: 0,
        backgroundColor: '#d3d3d3',
        //position: 'absolute',
        //borderTopWidth: 0,
        //top:500
    },
    }}
    >
            <Tab.Screen options={{
               tabBarLabel: ({focused})=>
                (<View style = {{backgroundColor: focused ? 'blue' : 'white', width:125 ,height:65, borderRadius:10,flex:1 ,flexDirection:'row' ,justifyContent:'space-evenly', alignItems:'center'}}>
              <Ionicons name="search-circle-sharp" size={48} color = {focused ? 'white' : 'blue'} /> 
              </View>)
              }} 
                name="EdiOrderDetailsScreenSearch" 
                component={EdiOrderDetailsScreenSearch} />

      <Tab.Screen   options={{
          tabBarLabel: ({focused}) => (
            <View style = {[styles.tabBg,{backgroundColor: focused ? 'blue' :styles.tabBg.backgroundColor , borderRadius:10}]}>
            <View style={[styles.circle , {backgroundColor: focused ? 'white' : styles.circle.backgroundColor , borderRadius:50}]}><Text style={[styles.textCircle,{color: focused ? 'blue' : styles.textCircle.color}]}>25</Text></View>
            <Text style={[styles.text , {color: focused ? 'white' : styles.text.color}]}>Open</Text>
            </View>
          ) 
        }}
         name="EdiOrderDetailsScreenOpen" component={EdiOrderDetailsScreenOpen} />

<Tab.Screen   options={{
          tabBarLabel: ({focused}) => (
            <View style = {[styles.tabBg,{backgroundColor: focused ? 'blue' :styles.tabBg.backgroundColor , borderRadius:10}]}>
            <View style={[styles.circle , {backgroundColor: focused ? 'white' : styles.circle.backgroundColor , borderRadius:50}]}><Text style={[styles.textCircle,{color: focused ? 'blue' : styles.textCircle.color}]}>25</Text></View>
            <Text style={[styles.text , {color: focused ? 'white' : styles.text.color}]}>Closed</Text>
            </View>
          ) 
        }}
     name="EdiOrderDetailsScreenClosed" component={EdiOrderDetailsScreenClosed} />

    </Tab.Navigator>
    
    </>
  );
}




const EdiOrderDetailsStackNavigator = () => {
  return (
     <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="MyTabBar" component={MyTabBar} />
     </Stack.Navigator>
   
    
  
  )
}

const styles = StyleSheet.create({

  tabContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 70,
    //backgroundColor: '#F8F7FB',
     backgroundColor: 'yellow',
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  tabBg : {
    flex:1 ,
    flexDirection:'row' ,
    justifyContent:'space-evenly',
     alignItems:'center',
     width:125 ,
      borderRadius:10,
      backgroundColor:'white'

  },
  TextInputTab:{
    display:'flex',
    justifyContent :'center',
    alignItems:'center',
    backgroundColor:'white' ,
    elevation: 3,
     width:'25%' ,
      //height:'5%' ,
      borderRadius:10
  },
  circle :{
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor:'blue',
    //border: '3px solid #000',
    //color: '#000',
    //textAlign: 'center',
    //font: '32px Arial, sans-serif'
   
  },
  textCircle: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text:{
    color:'black',
    fontWeight: 'bold',fontSize:18
  }
})

export default EdiOrderDetailsStackNavigator;



