import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'



import { EdiCertificateApprovalScreen } from '../../../screens/ediDcreens/EdiCertificateApprovalScreen';
const Stack = createStackNavigator()


const EdiICertificateApprovalStackNavigator = () => {
  
  return (
     <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="EdiCertificateApprovalScreen" component={EdiCertificateApprovalScreen} />
     </Stack.Navigator>
   
    
  
  )
}


export default EdiICertificateApprovalStackNavigator;



