import React from 'react'
import { ApolloProvider } from '@apollo/client';
import {client} from './Client';
import { SafeAreaView, View, StatusBar, StyleSheet, Text  ,TextInput, Button , TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigator'
import { createStackNavigator } from '@react-navigation/stack'

import LandingStackNavigator from './navigation/stackNavigators/LandingStackNavigator'
import LoginStackNavigator from './navigation/stackNavigators/LoginStackNavigator'


const RootStack = createStackNavigator()



const App = () => {
  return (
     <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ApolloProvider client={client}>
      <NavigationContainer>
          {/* <DrawerNavigator /> */}
          {/* <LandingStackNavigator /> */}
          {/* <LoginStackNavigator /> */}
          
          <RootStack.Navigator screenOptions={{
      headerShown: true,
    }}>
    <RootStack.Group>
    <RootStack.Screen name="Landing" component={LandingStackNavigator} />
      <RootStack.Screen name="Login" component={LoginStackNavigator} />
      <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </RootStack.Group>

    {/* <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Group> */}
     

    </RootStack.Navigator>
      </NavigationContainer>
      </ApolloProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
  
})

export default App