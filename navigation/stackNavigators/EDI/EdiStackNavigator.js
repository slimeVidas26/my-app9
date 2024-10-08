import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
//import EDICertificateStackNavigator from './EDICertificateStackNavigator';
import EdiOrderDetailsStackNavigator from './EdiOrderDetailsStackNavigator';
import EntryCertificateStackNavigator from './EntryCertificateStackNavigator';
import EdiItemApprovalStackNavigator from './EdiItemApprovalStackNavigator';
//import EdiCertificateApprovalStackNavigator from './_EdiCertificateApprovalStackNavigator';
//import EdiCertificateConfirmationStackNavigator from './EdiCertificateConfirmationStackNavigator';
//import EndEdiFormStackNavigator from './_EndEdiFormStackNavigator';
import EDICertificateScreen from '../../../screens/ediScreens/EDICertificateScreen';
// import PopUpScreen from '../../../screens/ediDcreens/PopUpScreen1';
import { useRoute } from '@react-navigation/native';
import { EdiCertificateApprovalScreen } from '../../../screens/ediScreens/EdiCertificateApprovalScreen';
import { EndEdiFormScreen } from '../../../screens/ediScreens/EndEdiFormScreen';
import { EdiCertificateConfirmationScreen } from '../../../screens/ediScreens/EdiCertificateConfirmationScreen';
import { EdiItemApprovalScreen } from '../../../screens/ediScreens/EdiItemApprovalScreen';
import { EdiItemApprovalScreenClosed } from '../../../screens/ediScreens/EdiItemApprovalScreenClosed';

import { TabNavigator } from './TabNavigator';

const Stack = createStackNavigator()
const EdiStackNavigator = () => {

  const route = useRoute();
  console.log("routeName" , route.name);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true
    }}>
      <Stack.Screen name="EDICertificateScreen" component={EDICertificateScreen} />
      <Stack.Screen name="EntryCertificate" component={EntryCertificateStackNavigator} />
      {/* <Stack.Screen name="PopUp" component={PopUpScreen} /> */}
      {/* <Stack.Screen name="MyTabBar" component={EdiOrderDetailsStackNavigator} /> */}
     <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="EdiItemApprovalScreen" component={EdiItemApprovalScreen} />
      <Stack.Screen name="EdiItemApprovalScreenClosed" component={EdiItemApprovalScreenClosed} />

      <Stack.Screen name="EdiCertificateApprovalScreen" component={EdiCertificateApprovalScreen} />
      <Stack.Screen name="EdiCertificateConfirmationScreen" component={EdiCertificateConfirmationScreen} />
      <Stack.Screen name="EndEdiFormScreen" component={EndEdiFormScreen} />


    </Stack.Navigator>
  )
}



export default EdiStackNavigator