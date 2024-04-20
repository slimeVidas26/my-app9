import React , {useState , useEffect} from 'react'
import Modal from "../../components/modals/Modal";
import { ModalHeader , EdiHeader } from '../../components/headers/Header';

import {View, Text ,
        ImageBackground,Keyboard, StyleSheet , Button ,
        FlatList  ,ActivityIndicator,TouchableOpacity,
  Image  , Dimensions,
  ScrollView} from 'react-native'
  import Icon from 'react-native-vector-icons/FontAwesome'
  import Constants from 'expo-constants';
  import filter from 'lodash.filter';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import notFound from '../../assets/data-not-found.jpg'

import { useQuery } from "@apollo/client";
import { EDI_ORDERS_QUERY } from '../../gql/Query';

const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

console.log(screenWidth)





const EDICertificate = ({navigation}) => {


  const [isModalOpen, setModalOpen] = useState(false);
  const {data ,error ,  loading} = useQuery(EDI_ORDERS_QUERY);
   console.log(data)
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);
  const [title , setTitle] = useState('')
  const [info , setInfo] = useState('')

  useEffect(() => {
    setInfo('No Data Found')
    console.log(info)
    console.log(title)
  }, [query , info , title]) 

 

 const renderItem=({ item }) => (
    
    <View style={styles.listItem}>
        <View style={styles.metaInfo}>
          <Text style={styles.title}></Text>
          <Text style={[styles.title , styles.text]}>{`${item.supplier}`}</Text>
        </View>

        <View style={styles.metaInfo}>
          <Text style={[styles.title , styles.text]}>Boxes:{`${item.boxes}`}</Text>
          <Text style={styles.title}>Supplier Number:{`${item.supplierNumber}`}</Text>
        </View>
        <View style={styles.metaInfo}>
          <Text style={[styles.title , styles.text]}>Quantity:{`${item.quantity}`}</Text>
          <Text style={styles.title}>Edi:{`${item.edi}`}</Text>

        </View>
        <View style={styles.metaInfo}>
          <Text style={styles.title}>{`${item.date}`}</Text>
          <Text style={styles.title}>Order Number: {`${item.orderNumber}`}</Text>

        </View>
      </View>
    


   )

   const myListEmpty = () => {
      return (
      <View style={{flex:1}}> 
      <Text style={styles.item}>No Data Found</Text>
    </View> 

      )
    }
   
  
   const handleSearch = text => {
     const formattedQuery = text.toLowerCase(); 
     console.log(formattedQuery)
     const filteredData = filter(data.ediOrders, edi => {
       return contains(edi, formattedQuery);
     });
     console.log('filteredData' , filteredData);
     setModalOpen(true)
     setQuery(text);
     setFullData(filteredData)
     setTitle('Edi Certificate')
      console.log('fullData.length',fullData.length)
   };
  
   const contains = ({orderNumber }, query) => {
     //const { first, last } = name;
  console.log('contains' , contains)
     if (orderNumber.includes(query)) {
       return true;
     }
    
     return false;
   };


 
  function renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '5%'
        }}
      />
    )
  }


    return (
    <>
      <View style={styles.container}>
      {loading && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>}
        {error &&  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18}}>
            Error fetching data... Check your network connection!
          </Text>
        </View>}
        
      { isModalOpen == true ? 
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalOpen}
          >
             {query ? 
             <>
             <FlatList style = {styles.flatList}
                       ListHeaderComponent={<ModalHeader
                       setModalOpen = {setModalOpen} 
                       isModalOpen = {isModalOpen}
                       query = {query}
                       handleSearch = {handleSearch}/>}
                       ItemSeparatorComponent={renderSeparator}
                       data={fullData}
                       keyExtractor={item => item.id}
                       renderItem={renderItem}
                       ListEmptyComponent= {myListEmpty}
           />
           </>
           :
           <FlatList style = {styles.flatList}
                       ListHeaderComponent={<ModalHeader
                       setModalOpen = {setModalOpen} 
                       isModalOpen = {isModalOpen}
                       query = {query}
                       handleSearch = {handleSearch}/>}
                       ItemSeparatorComponent={renderSeparator}
                       data={null}
                       keyExtractor={item => item.id}
                       renderItem={renderItem}
                       ListEmptyComponent= {myListEmpty}
           />
           
           }
          
        </Modal>
        :
        !loading && !error && data  &&
       <>
              <FlatList style = {styles.flatList}
                        ListHeaderComponent={<EdiHeader
                        setModalOpen = {setModalOpen} 
                        setQuery = {setQuery} 
                        setFullData ={setFullData}/>}
                        ItemSeparatorComponent={renderSeparator}
                        data={data.ediOrders}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={myListEmpty}
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

  flatList :{
    width:'95%'
  },
 

 
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  icon: {
    //backgroundColor:'green',
    padding: 10,
    borderRadius: 5,
    position: 'relative',
    overflow:'visible',
    top:0,
    zIndex: 5
   
   
   
  },
  btnZone:{
  flexDirection :'row',
  justifyContent: 'space-around',
  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // popupContainer: {
  //   marginTop:110,
  //   backgroundColor: 'white',
  //   padding: 50,
  //   borderRadius: 50,
  //   alignItems: 'center', 
  // },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "blue",
    marginHorizontal:80
   
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    width:120,
    marginTop: 20,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
         marginTop: 10,
         paddingVertical: 0,
        backgroundColor: '#fff',
         flexDirection: 'column',
         justifyContent:'space-around',
         borderRadius:10,
      },

     
      metaInfo: {
            // elevation: 1,
             borderRadius: 2,
             flex: 1,
             flexDirection: "row", // main axis
            justifyContent: "space-between", // main axis
             //paddingTop: 10,
             //paddingBottom: 10,
             marginLeft: 10,
             marginRight: 10,
             marginTop: 0,
             marginBottom: 0,
           },
           text: {
                 fontSize:20,
                 color: 'blue',
                 //fontWeight: '700'
               },
               inputView: {
                backgroundColor: "#d3d3d3",
                borderRadius: 20,
                width: 300,
                height: 55,
                marginBottom: 20,
                alignItems: "center",
                marginHorizontal:50
              },
    item:{
      fontSize:30,
      color:'blue',
        alignSelf: 'center',
        marginTop:250

        
              },
             
              TextInput: {
                height: 60,
                flex: 1,
                padding: 5,
                marginLeft: 10,
                fontSize : 20,
                borderRadius : 25,
              },
});




  
