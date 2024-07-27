
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../screens/drawerScreens/homeScreens/HomeScreen.js'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}



export default HomeStackNavigator