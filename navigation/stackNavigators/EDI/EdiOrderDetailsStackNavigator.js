import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { EdiOrderDetailsScreen } from '../../../screens/ediDcreens/EdiOrderDetailsScreen'

const Stack = createStackNavigator()


const EdiOrderDetailsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
     
      <Stack.Screen name="EdiOrderDetails" component={EdiOrderDetailsScreen} />

    </Stack.Navigator>
  )
}

export default EdiOrderDetailsStackNavigator;



