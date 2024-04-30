//const [title, setTitle] = useState('')
//const [info, setInfo] = useState('')
// useEffect(() => {
// }, [query , info , title]) 
//ImageBackground, Keyboard,Button,TouchableOpacity,Image,ScrollView
//import Icon from 'react-native-vector-icons/FontAwesome'
//import Constants from 'expo-constants';
//import { StatusBar } from 'expo-status-bar';
//import { Entypo } from '@expo/vector-icons';
//import notFound from '../../assets/data-not-found.jpg'
//const screenHeight = Dimensions.get('window').height;
//const screenWidth = Dimensions.get('window').width;
//console.log(screenWidth)
//const { first, last } = name;
// Dimensions
// setTitle('Edi Certificate')






import React, { useState } from 'react'
import Modal from "../../components/modals/Modal";
import { ModalHeader, EdiHeader } from '../../components/headers/Header';
import { View, StyleSheet, FlatList  } from 'react-native'
import filter from 'lodash.filter';
import { EDIcertificateItem } from '../../components/EDICertificate/EDIcertificateItem';
import { MyListEmpty } from '../../components/EDICertificate/MyListEmpty';
import { RenderSeparator } from '../../components/EDICertificate/RenderSeparator';
import { Loading } from '../../components/EDICertificate/Loading';
import { Error } from '../../components/EDICertificate/Error';
import { useQuery } from "@apollo/client";
import { EDI_ORDERS_QUERY } from '../../gql/Query';


const EDICertificate = ({navigation}) => {


  const [isModalOpen, setModalOpen] = useState(false);
  const { data, error, loading } = useQuery(EDI_ORDERS_QUERY);
  console.log(data)
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);


  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    console.log('formattedQuery' , formattedQuery)
    const filteredData = filter(data.ediOrders, order => {
      return contains(order, formattedQuery);
    });
    setModalOpen(true)
    setQuery(text);
    setFullData(filteredData)
  };

  const contains = ({  supplier ,supplierNumber , orderNumber  }, query) => {
    
    if ( supplier.toLowerCase().includes(query) ||
          supplierNumber.includes(query) ||
          //edi.includes(query) ||
          orderNumber.includes(query)) {
      return true;
    }

    return false;
  };

  return (
    <>
      <View style={styles.container}>
        {loading && <Loading/>}
        {error && <Error/>}

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
              data={query ? fullData : null}
              keyExtractor={item => item.id}
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
            data={data.ediOrders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <EDIcertificateItem item={item} />}
            ListEmptyComponent={<MyListEmpty message="No Data Found" />}
          />
         </>
        }
      </View>
    </>
  );

}

export default EDICertificate

const styles = StyleSheet.create({
  
  
  container: {
    flex: 1,
    padding: 8,
    flexDirection: "column", // main axis
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
    //backgroundColor: colors.background_dark
  },

  flatList: {
    //width: '100%',
    marginTop: 14,
    alignSelf: "stretch",

  }
});





