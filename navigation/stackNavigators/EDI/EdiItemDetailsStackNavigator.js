import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import EdiItemDetails from '../../../screens/ediDcreens/EdiItemDetailsScreen';

const Stack = createStackNavigator()





const EdiItemDetailsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
     
      <Stack.Screen name="EdiItemDetails" component={EdiItemDetails} />

    </Stack.Navigator>
  )
}

export default EdiItemDetailsStackNavigator



