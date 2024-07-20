import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const suppliers = [
  { id: '1', name: 'Supplier 1', address: '123 Main St' },
  { id: '2', name: 'Supplier 2', address: '456 Elm St' },
  { id: '3', name: 'Supplier 3', address: '789 Oak St' },
  // Add more suppliers as needed
];

const SupplierItem = ({ name, address }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.address}>{address}</Text>
  </View>
);

const SupplierList = () => {
  return (
    <FlatList
      data={suppliers}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <SupplierItem name={item.name} address={item.address} />
      )}
    />
  );
};

const Suppliers = () => (
  
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Suppliers screen!</Text>
  </View>
)

const SuppliersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Suppliers" component={Suppliers} />
    </Stack.Navigator>
  )
}

export default SuppliersStackNavigator