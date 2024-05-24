import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'

import { EdiOrderDetailHeader } from '../../../components/headers/Header';

import { EdiOrderDetailsTab } from '../../../components/tabs/EdiOrderDetailsTab';
import TotoScreen from '../../../screens/ediDcreens/TotoScreen';
import { EdiItemApprovalScreen } from '../../../screens/ediDcreens/EdiItemApprovalScreen';

const Stack = createStackNavigator()


const EdiItemApprovalStackNavigator = () => {
  
  return (
     <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="EdiItemApprovalScreen" component={EdiItemApprovalScreen} />
       <Stack.Screen name="TotoScreen" component={TotoScreen} />

     </Stack.Navigator>
  )
}


export default EdiItemApprovalStackNavigator;



