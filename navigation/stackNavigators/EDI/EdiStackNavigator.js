import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EDICertificateStackNavigator from './EDICertificateStackNavigator';
import EdiOrderDetailsStackNavigator from './EdiOrderDetailsStackNavigator';
import EntryCertificateStackNavigator from './EntryCertificateStackNavigator';
import PopUpScreen from '../../../screens/ediDcreens/PopUpScreen1';
import { useRoute } from '@react-navigation/native';




const Stack = createStackNavigator()



const EdiStackNavigator = () => {

  const route = useRoute();
  console.log(route.name);
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>

      <Stack.Screen name="EDICertificate" component={EDICertificateStackNavigator} />
      <Stack.Screen name="EntryCertificate" component={EntryCertificateStackNavigator} />
      <Stack.Screen name="PopUp" component={PopUpScreen} />
      <Stack.Screen name="EdiOrderDetailsScreen" component={EdiOrderDetailsStackNavigator} />


    </Stack.Navigator>
  )
}



export default EdiStackNavigator