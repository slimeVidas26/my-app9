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
  console.log("data from ediCertificateScreen",data)
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

 const EDIcertificateItem = ({ item  }) => {
  //const orderId = Object.keys(item)[0].id
    //console.log('orderId' ,orderId )
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator' , {paramData:item})}>
        <View style={styles.listItem}>
          <View style={styles.metaInfo}>
            <Text style={styles.title}></Text>
            <Text style={styles.blueText}>{`${item.supplier.name}`}</Text>
          </View>
  
          <View style={styles.metaInfo}>
            <Text style={styles.blueText}>Boxes:{`${item.totalBoxes}`}</Text>
            <Text style={styles.title}>Supplier Number:{`${item.supplier.number}`}</Text>
          </View>
  
          <View style={styles.metaInfo}>
            <Text style={styles.blueText}>Quantity:{`${item.totalQuantity}`}</Text>
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
              data={isModalOpen == true? (query ? fullData : null):data.orders}
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
            data={data.orders}
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
    flexDirection: "column", // main axis
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
    //backgroundColor: colors.background_dark
  },

  flatList: {
    //width: '100%',
    marginTop: 14,
    alignSelf: "stretch",
  },

  //ediItem
  listItem: {
    marginTop: 10,
    paddingVertical: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  metaInfo: {
    borderRadius: 2,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "space-between", // main axis
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    marginBottom: 0,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
  },

  blueText: {
    fontSize: 20,
    color: 'blue',
  }
});





