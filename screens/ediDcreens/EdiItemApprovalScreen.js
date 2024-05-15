//import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button ,Image,TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { translation } from '../../i18n/supportedLanguages';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import Modal from '../../components/modals/Modal';


// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n(translation);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
 i18n.locale = 'he';



 export const EdiItemApprovalScreen= ({navigation})=> {

  const [isModalOpen, setModalOpen] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleOpenPopup = () => {
    setIsVisible(true);
  };

  const handleClosePopup = () => {
    setIsVisible(false);
  };
  //const { data, error, loading } = useQuery(EDI_ORDERS_QUERY);
  
  // const [email, setEmail] = useState("toto");
  // const [password, setPassword] = useState("");
 
  return (
    <>
      <View style={styles.container}>
        {/* {loading && <Loading/>}
        {error && <Error/>} */}

        {isModalOpen == true ?
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalOpen}
          >
              {/* <ModalHeader
                setModalOpen={setModalOpen}
                isModalOpen={isModalOpen}
                // query={query}
                // handleSearch={handleSearch} 
                /> */}
                
              {/* <FlatList style={styles.flatList}
              ItemSeparatorComponent={<RenderSeparator />}
              data={isModalOpen == true? (query ? fullData : null):data.ediOrders}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <EDIcertificateItem item={item} navigation = {navigation} />}
              ListEmptyComponent={<MyListEmpty message="No Data Found" />}
            /> */}
            <View style = {{backgroundColor:'green'}}><Text>Modal open</Text></View>
            <View style = {{backgroundColor:'yellow'}}><Text>Modal open</Text></View>
            <View style = {{backgroundColor:'blue'}}><Text>Modal open</Text></View>
            <View style = {{display:'flex',backgroundColor:'#d4d4d4' , padding:15 , borderRadius:10 ,alignItems:'center'}}><Text>No Matching Quantity</Text></View>
            
            
            <View style = {styles.btnZone}>
    <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
      <Text style={styles.closeButtonText}>Next</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.closeButton}
onPress={() => {setModalVisible(false);navigation.goBack()}}>
<Text style={styles.closeButtonText}>Cancel</Text> 
</TouchableOpacity>
    </View>          
    </Modal>
          :
          <View><Text>mODAL NOT</Text></View>
            
        }
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  logo : {
    width : "100%",
    marginBottom : 10,
    alignItems: 'center',

  }, 
  image: {
    // width : "90%",
    // backgroundColor: '#0553',
    width : "100%",
    marginBottom : 80,
    alignItems: 'center',
    position : 'relative',
    top:20
  },
  expoImage: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },

  inputView: {
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    width: "70%",
    height: 55,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 60,
    flex: 1,
    padding: 5,
    marginLeft: 10,
    fontSize : 20,
    borderRadius : 25,
  },
  loginBtn: {
    width: "60%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "blue",
   
  },

  loginText :{
    fontSize : 20,
    color :'white'
  },
  text:{
    fontSize:30,
    paddingBottom:30,
    color : "blue"
  },
  btnZone:{
    flexDirection :'row',
    justifyContent: 'space-around',
    width:400
    
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeButton: {
      //flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      width:120,
      marginTop: 20,
      padding: 15,
      backgroundColor: 'blue',
      borderRadius: 15,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
 
});
