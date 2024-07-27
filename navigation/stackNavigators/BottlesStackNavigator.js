import { createStackNavigator } from '@react-navigation/stack'
import { BottlesScreen } from '../../screens/drawerScreens/bottles/BottlesScreen'

const Stack = createStackNavigator()



const BottlesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="Bottles" component={BottlesScreen} />
    </Stack.Navigator>
  )
}

export default BottlesStackNavigator