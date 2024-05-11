import React from 'react'
import {TouchableOpacity , View ,Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack'
import { EdiOrderDetailsScreenOpen } from '../../../screens/ediDcreens/EdiOrderDetailsScreenOpen'
import { EdiOrderDetailsScreenClosed } from '../../../screens/ediDcreens/EdiOrderDetailsScreenClosed'
import { EdiOrderDetailsScreenSearch } from '../../../screens/ediDcreens/EdiOrderDetailsScreenSearch'

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
    <Tab.Navigator
    initialRouteName='EdiOrderDetailsScreenOpen'
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: true,
      //style: {backgroundColor:'red'},
    }}
    screenOptions={{
      //tabBarActiveTintColor: "red",
      //tabBarInactiveTintColor: "blue",
      // tabBarStyle: {
      //   height: 55,
      // },
      tabBarLabelStyle: {
        fontSize: 18,
        margin: 0,
      },
      tabBarStyle: {
        //height: 90,
        //paddingHorizontal: 5,
        //paddingTop: 0,
        //backgroundColor: 'rgba(34,36,40,1)',
        //position: 'absolute',
        //borderTopWidth: 0,
        //top:500
    },
    }}
    >
            <Tab.Screen options={{ tabBarLabel: ()=><Ionicons name="search-circle-sharp" size={48} color="blue" /> }} 
                        name="EdiOrderDetailsScreenSearch" 
                        component={EdiOrderDetailsScreenSearch} />

      <Tab.Screen   options={{
          tabBarLabel: ({focused, color, size , backgroundColor}) => (
            <View style = {{backgroundColor: focused ? 'blue' : backgroundColor,flex:1 ,flexDirection:'row' ,justifyContent:'space-evenly', alignItems:'center',width:'100%' , borderRadius:10 }}>
            <View style={[styles.circle , {backgroundColor: focused ? 'white' : 'blue'}]}><Text style={[styles.textCircle,{color: focused ? 'blue' : 'white'}]}>25</Text></View>
            <Text style={{color: focused ? 'white' : color,fontWeight: 'bold',fontSize:18}}>Open</Text>

            </View>
          ) 
        }}
         name="EdiOrderDetailsScreenOpen" component={EdiOrderDetailsScreenOpen} />

<Tab.Screen   options={{
          tabBarLabel: ({focused, color, size , backgroundColor}) => (
            <View style = {{backgroundColor: focused ? 'blue' : backgroundColor,flex:1 ,flexDirection:'row' ,justifyContent:'space-evenly', alignItems:'center',width:'100%' , borderRadius:10}}>
            <View style={[styles.circle , {backgroundColor: focused ? 'white' : 'blue' , borderRadius:50}]}><Text style={[styles.textCircle,{color: focused ? 'blue' : 'white'}]}>25</Text></View>
            <Text style={{color: focused ? 'white' : color,fontWeight: 'bold',fontSize:18}}>Closed</Text>

            </View>
          ) 
        }}
     name="EdiOrderDetailsScreenClosed" component={EdiOrderDetailsScreenClosed} />

    </Tab.Navigator>
    
   
  );
}




const EdiOrderDetailsStackNavigator = () => {
  return (
     <Stack.Navigator>
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
    //backgroundColor:'blue',
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
})

export default EdiOrderDetailsStackNavigator;



