
import React, { useMemo , useState } from 'react'
import Modal from "../../components/modals/Modal";
import { ModalHeader, EdiHeader } from '../../components/headers/Header';
import { View, StyleSheet, FlatList  , Text } from 'react-native'
import filter from 'lodash.filter';
import { MyListEmpty } from '../../components/EDICertificate/MyListEmpty';
import { RenderSeparator } from '../../components/EDICertificate/RenderSeparator';
import { Loading } from '../../components/EDICertificate/Loading';
import { Error } from '../../components/EDICertificate/Error';
import { useQuery } from "@apollo/client";
import { EDI_ORDERS_QUERY } from '../../gql/Query';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'




const EDICertificateScreen = () => {

  const navigation = useNavigation()
  const [isModalOpen, setModalOpen] = useState(false);
  const { data, error, loading } = useQuery(EDI_ORDERS_QUERY);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

  // const openOrders = data?.orders?.filter(order => order.openOrder === true) || [];
  const openOrders = useMemo(() => data?.orders?.filter(order => order.openOrder) || [], [data]);

 const EDIcertificateItem = ({ item  }) => {
  
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator' , {paramData:item})}>
        <View style={styles.listItem}>
          <View style={styles.metaInfo}>
          <Text style={styles.blueText}></Text>
            <Text style={styles.blueText}>{`${item.supplier.name}`}</Text>
          </View>
  
          <View style={styles.metaInfo}>
            <Text style={styles.blueText}>Boxes:{`${item.totalBoxes}`}</Text>
            <Text style={styles.title}>Supplier Number:{`${item.supplier.number}`}</Text>
          </View>
  
          <View style={styles.metaInfo}>
            <Text style={styles.blueText}>TQuantity:{`${item.totalQuantity}`}</Text>
            <Text style={styles.title}>Edi:{`${item.edi}`}</Text>
          </View>
  
          <View style={styles.metaInfo}>
            <Text style={styles.title}>{`${item.date}`}</Text>
            <Text style={styles.title}>Order Number: {`${item.reference}`}</Text>
          </View> 
        </View>
      </TouchableOpacity>
    )
  }

  const filterOrders = (orders, query) => {
  const formattedQuery = query.toLowerCase();
  return filter(orders, order => {
    const { supplier, edi, reference } = order;
    return supplier.name.toLowerCase().includes(formattedQuery) ||
           supplier.number.toString().includes(formattedQuery) ||
           edi.toString().includes(formattedQuery) ||
           reference.toString().includes(formattedQuery);
  });
};

const filteredData = useMemo(() => filterOrders(openOrders, query), [openOrders, query]);


// const handleSearch = text => {
//   setModalOpen(true);
//   setQuery(text);
//   setFullData(filterOrders(openOrders, text));
// };

const handleSearch = text => {
  setModalOpen(true);
  setQuery(text);
};


if (loading) return <Loading />;
  if (error) return <Error />;
  

  return (
    
      <View style={styles.container}>
        {isModalOpen == true ?
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalOpen}
          >
              <ModalHeader
                setModalOpen={setModalOpen}
                isModalOpen={isModalOpen}
                query={query}
                handleSearch={handleSearch} />
                
              <FlatList style={styles.flatList}
              ItemSeparatorComponent={<RenderSeparator />}
              //data={isModalOpen == true? (query ? fullData : null):openOrders}
              data = {filteredData}
              keyExtractor={(item) => item.id.toString()}   
               renderItem={({ item }) => <EDIcertificateItem item={item} navigation = {navigation} />}
              ListEmptyComponent={<MyListEmpty message="No Data Found" />}
            />
          </Modal>
          :
          !loading && !error && data &&
            <>
            <EdiHeader setModalOpen={setModalOpen}
                       setQuery={setQuery}
                       setFullData={setFullData} />

          <FlatList style={styles.flatList}
            ItemSeparatorComponent={<RenderSeparator />}
            data={openOrders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <EDIcertificateItem item={item} />}
            ListEmptyComponent={<MyListEmpty message="No Data Found" />}
          />
         </>
        }
      </View>
    
  );

}

export default EDICertificateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  flatList: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  listItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  metaInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
  },
  blueText: {
    fontSize: 20,
    color: 'blue',
  },
});





