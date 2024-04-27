import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EdiOrderDetails from '../../../screens/ediDcreens/EdiOrderDetailsScreen';

const Stack = createStackNavigator()





const EdiOrderDetailsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
     
      <Stack.Screen name="EdiItemDetails" component={EdiOrderDetails} />

    </Stack.Navigator>
  )
}

export default EdiOrderDetailsStackNavigator



