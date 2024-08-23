import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import MyTabBarScreen from '../../../screens/ediScreens/MyTabBarScreen';



const Stack = createStackNavigator()


// function MyTabBar() {
//   const route = useRoute();
//   const { orderId } = route.params || {};  // Default to an empty object if undefined
  
//   console.log('orderId from eodsn', orderId);
  
//   return (
//     <>
//     <  EdiOrderDetailHeader/>
//     <EdiOrderDetailsTab/>
//     </>
//   );
// }

const EdiOrderDetailsStackNavigator = () => {
  
  return (
     <Stack.Navigator screenOptions={{
      headerShown: true
    }}>
       <Stack.Screen name="MyTabBarScreen" component={MyTabBarScreen} />
     </Stack.Navigator>
  )
}



export default EdiOrderDetailsStackNavigator;



