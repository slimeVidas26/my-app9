import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const DocumentReview = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Document Review screen!</Text>
  </View>
)

const DocumentReviewStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="DocumentReview" component={DocumentReview} />
    </Stack.Navigator>
  )
}

export default DocumentReviewStackNavigator