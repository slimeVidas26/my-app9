import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'



import { EdiCertificateApprovalScreen } from '../../../screens/ediDcreens/EdiCertificateApprovalScreen';
import { EndEdiFormScreen } from '../../../screens/ediDcreens/EndEdiFormScreen';
import { EdiCertificateConfirmationScreen } from '../../../screens/ediDcreens/EdiCertificateConfirmationScreen';
const Stack = createStackNavigator()


const EdiICertificateConfirmationStackNavigator = () => {
  
  return (
     <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="EdiCertificateConfirmationScreen" component={EdiCertificateConfirmationScreen} />

     </Stack.Navigator>
   
    
  
  )
}


export default EdiICertificateConfirmationStackNavigator;



