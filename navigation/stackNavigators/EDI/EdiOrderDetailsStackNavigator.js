import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'

import { EdiOrderDetailHeader } from '../../../components/headers/Header';

import { EdiOrderDetailsTab } from '../../../components/tabs/EdiOrderDetailsTab';


const Stack = createStackNavigator()


function MyTabBar({ navigation }) {

  
  return (
    <>
    <EdiOrderDetailHeader/>
    <EdiOrderDetailsTab/>
   
    
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



export default EdiOrderDetailsStackNavigator;



