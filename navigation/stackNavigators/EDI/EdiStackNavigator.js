import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EDICertificateStackNavigator from './EDICertificateStackNavigator';
import EdiOrderDetailsStackNavigator from './EdiOrderDetailsStackNavigator';
import EntryCertificateStackNavigator from './EntryCertificateStackNavigator';
import EdiItemApprovalStackNavigator from './EdiItemApprovalStackNavigator';
import EdiCertificateApprovalStackNavigator from './EdiCertificateApprovalStackNavigator';
import EdiCertificateConfirmationStackNavigator from './EdiCertificateConfirmationStackNavigator';
// import PopUpScreen from '../../../screens/ediDcreens/PopUpScreen1';
import { useRoute } from '@react-navigation/native';




const Stack = createStackNavigator()



const EdiStackNavigator = () => {

  const route = useRoute();
  console.log(route.name);
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name="EDICertificateScreen" component={EDICertificateStackNavigator} />
      <Stack.Screen name="EntryCertificate" component={EntryCertificateStackNavigator} />
      {/* <Stack.Screen name="PopUp" component={PopUpScreen} /> */}
      <Stack.Screen name="EdiOrderDetailsScreenOpen" component={EdiOrderDetailsStackNavigator} />
      <Stack.Screen name="EdiItemApprovalScreen" component={EdiItemApprovalStackNavigator} />
      <Stack.Screen name="EdiCertificateApprovalScreen" component={EdiCertificateApprovalStackNavigator} />
      <Stack.Screen name="EdiCertificateConfirmationScreen" component={EdiCertificateConfirmationStackNavigator} />


    </Stack.Navigator>
  )
}



export default EdiStackNavigator