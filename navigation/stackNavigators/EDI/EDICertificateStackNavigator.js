import React from 'react'
import { ApplicationProvider, Text, Avatar } from '@ui-kitten/components'
  import { mapping, light as lightTheme } from '@eva-design/eva'
import { createStackNavigator } from '@react-navigation/stack'

import EDICertificate from '../../../screens/ediDcreens/EDICertificateScreen';
import PopUp from '../../../screens/ediDcreens/PopUpScreen';


const Stack = createStackNavigator()


const EDICertificateStackNavigator = () => {
  return (
     <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
   
      <Stack.Screen name="EDICertificate" component={EDICertificate} />
      <Stack.Screen name="PopUp" component={PopUp} />

     
    </Stack.Navigator>
    </ApplicationProvider>
  )
}

export default EDICertificateStackNavigator



