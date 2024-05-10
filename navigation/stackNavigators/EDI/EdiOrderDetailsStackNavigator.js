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


function MyTabBar({ navigation }) {
  return (
    <Tab.Navigator
    screenOptions={{
      //tabBarLabelStyle: { fontSize: 18 },
      tabBarActiveTintColor: '#000',
      //tabBarItemStyle: { width: 60 },
     
      ///tabBarGap: 10,
      
      // tabBarActiveTintColor: '#e91e63',
    }}
    >
            <Tab.Screen
                options={{ tabBarItemStyle: { borderRadius:10 }, tabBarLabel: ()=><Ionicons name="search-circle-sharp" size={48} color="blue" /> }} 
                        name="EdiOrderDetailsScreenSearch" 
                        component={EdiOrderDetailsScreenSearch} />

      <Tab.Screen   options={{tabBarItemStyle: { borderRadius:10 , backgroundColor:'yellow' }, 
      tabBarLabel: ()=> <View style = {{flex:1 ,flexDirection:'row' ,justifyContent:'space-between', alignItems:'center'}}>
        <View style={styles.circle}><Text style={styles.textCircle}>25</Text></View>
        <View><Text>Open</Text></View>
        </View>}} 
         name="EdiOrderDetailsScreenOpen" component={EdiOrderDetailsScreenOpen} />

      <Tab.Screen    options={{tabBarItemStyle: { borderRadius:10 }, 
     tabBarLabel: ()=> <View style = {{flex:1 ,flexDirection:'row' ,justifyContent:'space-between', alignItems:'center'}}>
     <View style={styles.circle}><Text style={styles.textCircle}>25</Text></View>
     <View><Text>Closed</Text></View>
     </View> }} name="EdiOrderDetailsScreenClosed" component={EdiOrderDetailsScreenClosed} />

    </Tab.Navigator>
    
   
  );
}




const EdiOrderDetailsStackNavigator = () => {
  return (
     <Stack.Navigator screenOptions={{headerShown: false,}}>
       <Stack.Screen name="MyTabBar" component={MyTabBar} />
     </Stack.Navigator>
   
    
  
  )
}

const styles = StyleSheet.create({
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
})

export default EdiOrderDetailsStackNavigator;



