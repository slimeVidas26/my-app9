import React , {useState , useEffect} from 'react'
import { View, Text , FlatList,StyleSheet ,ActivityIndicator , TextInput} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useQuery } from "@apollo/client";
import { SUPPLIERS_QUERY } from '../../gql/Query';

const Stack = createStackNavigator();  

// const suppliers = [
//   { id: '1', name: 'Supplier 1', address: '123 Main St' },
//   { id: '2', name: 'Supplier 2', address: '456 Elm St' },
//   { id: '3', name: 'Supplier 3', address: '789 Oak St' },
//   // Add more suppliers as needed
// ];

const SupplierItem = ({ name, number }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.number}>{number}</Text>
  </View>
);



const Suppliers = () => {
  const { loading, error, data } = useQuery(SUPPLIERS_QUERY);
  const [search, setSearch] = useState('');
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredSuppliers(data.suppliers);
    }
  }, [data]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filteredData = data.suppliers.filter(item => 
        item.name.toLowerCase().includes(text.toLowerCase()) || 
        item.number.toString().includes(text)
      );
      setFilteredSuppliers(filteredData);
    } else {
      setFilteredSuppliers(data.suppliers);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  
    return (
      <View style={styles.container}>
     <TextInput
        style={styles.searchBar}
        placeholder="Search by name or number"
        value={search}
        onChangeText={handleSearch}
      />

    <FlatList
      data={filteredSuppliers}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <SupplierItem name={item.name} number={item.number} />
      )}
    />
     </View>
  );
 
}

const styles = StyleSheet.create({

  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    margin: 10,
  },
  
  
  container: {
    flex: 1,
    padding: 8,
    flexDirection: "column", // main axis
    justifyContent: "center", // main axis
    //alignItems: "center", // cross axis
    //backgroundColor: colors.background_dark
  },

  flatList: {
    //width: '100%',
    marginTop: 14,
    alignSelf: "stretch",
  },
  item: {
    //width: '100%',
    //backgroundColor:'red',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems:"center"
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    color: '#555',
  },
});

const SuppliersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="Suppliers" component={Suppliers} />
    </Stack.Navigator>
  )
}

export default SuppliersStackNavigator