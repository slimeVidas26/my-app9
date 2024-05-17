//import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button ,Pressable,Image,TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { translation } from '../../i18n/supportedLanguages';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import Modal from '../../components/modals/Modal';
import { Feather } from '@expo/vector-icons';



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

<View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.compagny}>Ossem Taassiot Mazon</Text>
        <Text style={styles.productName}>
        Product Name</Text>
        <Text style={styles.productCode}>
        72900000025487 </Text>
        <Text style={styles.productQuantityInStock}>
        Quantity in stock:104</Text>
        <View style = {styles.left}>
                      <Text style = {styles.boxes}>12</Text>   
                      <Feather name="box" size={26} color="black" />
                    </View>
      </View>
    <View style = {styles.right}>
    <Image
        style={styles.productImage}
        //source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your product image URL
        source={require('../../assets/gamadim.png')} // Replace with your product image URL
      />

     <Text style = {styles.before}>Quantity before:47</Text>
    </View>
      
    </View>


            {/* <View style = {{backgroundColor:'#d4d4d4',flexDirection :'row',alignItems:'center' , justifyContent:'center'  }} >
              <View style = {{ padding:10,flexDirection :'column',alignItems:'flex-start' , justifyContent:'space-between' , width:'65%'}}>
                <Text style = {{color:'black' , fontSize:22 , paddingBottom:10}}>Ossem Taassiot Mazon</Text>
                <Text numberOfLines={3} style = {{color:'blue', fontSize:20, paddingBottom:10 }}>Product Name</Text>
                <Text style = {{color:'black' , fontSize:18 , paddingBottom:10}}>72900000025487</Text>
                <Text style = {{color:'black' , fontSize:18, paddingBottom:10}}>Quantity in stock:104</Text>
                <View style = {styles.left}>
                      <Text style = {styles.boxes}>12</Text>   
                      <Feather name="box" size={26} color="black" />
                    </View>
                </View>
              <View style = {{flex:1,   justifyContent:'space-around' , width:'35%'}}>
              <Image   style={styles.img} source={require('../../assets/gamadim.png')}/>
              <View>
              <Text style = {{fontSize:16}}>Initial quantity:48</Text>

              </View>
              </View>
              </View> */}
            <View style = {styles.btnZone}>
            <Pressable style={styles.unitsButton}
              onPress={()=>console.log("Units")}>
              <Text style={[styles.closeButtonText , {fontSize:25}]}>Units</Text> 
              </Pressable>
              </View>
            <View style = {[styles.btnZone]}>
            <Pressable onPress={()=>console.log("Minus")} style={styles.countButton}>
            <Feather name="minus" size={60} color="black" />
          </Pressable>
          <TextInput value='0' style = {{fontSize:40 , color:'blue'}}/>
           <Pressable style={styles.countButton}
onPress={()=>console.log("Plus")}>
<Feather name="plus" size={60} color="black" /></Pressable>
              </View>
            <View style = {{display:'flex',backgroundColor:'#d4d4d4' , padding:15 , borderRadius:10 ,alignItems:'center',margin:20}}><Text style ={{fontSize:20 , color:'black'}}>No Matching Quantity</Text></View>
            
            
            <View style = {styles.btnZone}>
    <Pressable onPress={handleClosePopup} style={styles.closeButton}>
      <Text style={styles.closeButtonText}>Next</Text>
    </Pressable>
    <Pressable style={styles.closeButton}
onPress={() => {setModalVisible(false);navigation.goBack()}}>
<Text style={styles.closeButtonText}>Cancel</Text> 
</Pressable>
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
    display:'flex',
    flexDirection:'row',
    //backgroundColor: '#d4d4d4',
    alignItems: 'center',
    // justifyContent: 'center',
    padding:10
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  compagny: {
    fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 8,
  },
  productName: {
    fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 8,
    color:'blue'
  },
  productCode: {
    fontSize: 18,
    //fontWeight: 'bold',
    marginBottom: 8,
    //color:'blue'
  },
  productQuantityInStock: {
    fontSize: 18,
    //fontWeight: 'bold',
    marginBottom: 8,
    //color:'blue'
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
  },
  productImage: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 16,
  },
  img:{
    backgroundColor:'white',
    width: 100, height: 168,
    alignSelf:'flex-end'
  },
  boxes:{
    //backgroundColor:'yellow',
    fontSize:16,
    marginRight:12
    },
  left:{
    //flex:1,
    //backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
  },
  right:{
    flexDirection:'column'
  },

  before:{
alignSelf:'flex-end',
paddingRight:20,
fontSize:18
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
    width:400,
    
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
    countButton: {
      //flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      width:100,
      marginTop: 20,
      padding: 15,
      backgroundColor: 'blue',
      borderRadius: 15,
    },
     unitsButton: {
      //flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      width:'90%',
      marginTop: 20,
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 15,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
 
});
