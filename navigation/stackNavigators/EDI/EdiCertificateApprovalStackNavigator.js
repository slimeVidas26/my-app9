import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'



import { EdiCertificateApprovalScreen } from '../../../screens/ediDcreens/EdiCertificateApprovalScreen';
import { EndEdiFormScreen } from '../../../screens/ediDcreens/EndEdiFormScreen';
import  TotoScreen  from '../../../screens/ediDcreens/TotoScreen';

const Stack = createStackNavigator()


const EdiICertificateApprovalStackNavigator = () => {
  
  return (
     <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="EdiCertificateApprovalScreen" component={EdiCertificateApprovalScreen} />
       <Stack.Screen name="EndEdiFormScreen" component={EndEdiFormScreen} />
       <Stack.Screen name="TotoScreen" component={TotoScreen} />

     </Stack.Navigator>
   
    
  
  )
}


export default EdiICertificateApprovalStackNavigator;



