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
import { View, Text, StyleSheet, FlatList  } from 'react-native'
import filter from 'lodash.filter';
import { EDIcertificateItem } from '../../components/EDICertificate/EDIcertificateItem';
import { MyListEmpty } from '../../components/EDICertificate/MyListEmpty';
import { RenderSeparator } from '../../components/EDICertificate/RenderSeparator';
import { Loading } from '../../components/EDICertificate/Loading';
import { Error } from '../../components/EDICertificate/Error';
import { useQuery } from "@apollo/client";
import { EDI_ORDERS_QUERY } from '../../gql/Query';


const EDICertificate = () => {


  const [isModalOpen, setModalOpen] = useState(false);
  const { data, error, loading } = useQuery(EDI_ORDERS_QUERY);
  //console.log(data)
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);


  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(data.ediOrders, edi => {
      console.log('edi' , edi)
      // console.log('toto',contains(edi, formattedQuery));
      return contains(edi, formattedQuery);
    });
    setModalOpen(true)
    setQuery(text);
    setFullData(filteredData)
  };

  const contains = ({ orderNumber , supplier , date }, query) => {
    if (orderNumber.includes(query) || supplier.includes(query) || date.includes(query)) {
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
            <FlatList style={styles.flatList}
              ListHeaderComponent={<ModalHeader
                setModalOpen={setModalOpen}
                isModalOpen={isModalOpen}
                query={query}
                handleSearch={handleSearch} />}
              ItemSeparatorComponent={<RenderSeparator />}
              data={query ? fullData : null}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <EDIcertificateItem item={item} />}
              ListEmptyComponent={<MyListEmpty message="No Data Found" />}
            />
          </Modal>
          :
          !loading && !error && data &&

          <FlatList style={styles.flatList}
            ListHeaderComponent={<EdiHeader
              setModalOpen={setModalOpen}
              setQuery={setQuery}
              setFullData={setFullData} />}
            ItemSeparatorComponent={<RenderSeparator />}
            data={data.ediOrders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <EDIcertificateItem item={item} />}
            ListEmptyComponent={<MyListEmpty message="No Data Found" />}
          />
        }
      </View>
    </>
  );

}

export default EDICertificate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  flatList: {
    width: '95%'
  }
});





