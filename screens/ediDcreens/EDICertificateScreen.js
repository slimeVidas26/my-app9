import React, { useState, useEffect } from 'react'
import Modal from "../../components/modals/Modal";
import { ModalHeader, EdiHeader } from '../../components/headers/Header';

import {
  View, Text,
  ImageBackground, Keyboard, StyleSheet, Button,
  FlatList, ActivityIndicator, TouchableOpacity,
  Image, Dimensions,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Constants from 'expo-constants';
import filter from 'lodash.filter';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import notFound from '../../assets/data-not-found.jpg'
import { EDIcertificateItem } from '../../components/EDICertificate/EDIcertificateItem';
import { MyListEmpty } from '../../components/EDICertificate/MyListEmpty';
import { RenderSeparator } from '../../components/EDICertificate/RenderSeparator';
import { useQuery } from "@apollo/client";
import { EDI_ORDERS_QUERY } from '../../gql/Query';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

console.log(screenWidth)





const EDICertificate = ({ navigation }) => {


  const [isModalOpen, setModalOpen] = useState(false);
  const { data, error, loading } = useQuery(EDI_ORDERS_QUERY);
  //console.log(data)
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [title, setTitle] = useState('')
  const [info, setInfo] = useState('')

  // useEffect(() => {
  // }, [query , info , title]) 

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    console.log(formattedQuery)
    const filteredData = filter(data.ediOrders, edi => {
      return contains(edi, formattedQuery);
    });
    console.log('filteredData', filteredData);
    setModalOpen(true)
    setQuery(text);
    setFullData(filteredData)
    setTitle('Edi Certificate')
  };

  const contains = ({ orderNumber }, query) => {
    //const { first, last } = name;
    console.log('contains', contains)
    if (orderNumber.includes(query)) {
      return true;
    }

    return false;
  };

  return (
    <>
      <View style={styles.container}>
        {loading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>}
        {error && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>
            Error fetching data... Check your network connection!
          </Text>
        </View>}

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
          <>
            <FlatList style={styles.flatList}
              ListHeaderComponent={<EdiHeader
                setModalOpen={setModalOpen}
                setQuery={setQuery}
                setFullData={setFullData} />}
              ItemSeparatorComponent={<RenderSeparator />}
              data={data.ediOrders}
              keyExtractor={item => item.id}
              //renderItem={<EDIcertificateItem/>}
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
    justifyContent: 'center',
    alignItems: 'center'
  },

  flatList: {
    width: '95%'
  }
});





