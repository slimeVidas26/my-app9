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
  const [matching , setMatching] = useState(false)
  const [index, setIndex] = useState(0);

  const [count, setCount] = useState(0);
  
  const [selected , setSelected] = useState('btn1')
  console.log(selected)

  const changeColor = (btn) => {
     setSelected( btn );
  };

  console.log(()=>changeColor('btn1'))


  const [counter, setCounter] = useState(0); 
    const [initialCount, setInitialCount] = useState(9); 
  
    const handleInitialCountChange = (value) => { 
        setInitialCount(Number(value)); 
    }; 
  
    const handleReset = () => { 
        setCounter(initialCount); 
        setMatching(true)
    }; 

    const decrementCounter = () => { 
      setCounter(counter - 1); 
      changeColor('btn1');
      

  }; 
  
    const incrementCounter = () => { 
        setCounter(counter + 1); 
        changeColor('btn2');
       
    }; 
  
    

  const handleClosePopup = () => {
    setIsVisible(false);
  };
  //const { data, error, loading } = useQuery(EDI_ORDERS_QUERY);
  
  // const [email, setEmail] = useState("toto");
  // const [password, setPassword] = useState("");
 
  return (
  
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
        Gamadim 100 gl Gamadim 100 gl</Text>
        <Text style={styles.productCode}>
        72900000025487 </Text>
        <Text style={styles.productQuantityInStock}>
        Quantity in stock:104</Text>
        <View style = {styles.box}>
                      <Text style = {styles.boxes}>12</Text>   
                      <Feather name="box" size={26} color="black" />
                    </View>
      </View>
    <View style = {styles.imageContainer}>
    <Image
        style={styles.productImage}
        //source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your product image URL
        source={require('../../assets/gamadim.png')} // Replace with your product image URL
      />
     {/* <Text style = {styles.before}>Quantity before:47</Text> */}
   
    </View>
      
    </View>
    <TouchableOpacity style = {styles.quantityBefore}  onPress={handleReset}  > 
                    <Text style={styles.before}> 
                     Quantity before:47
                   
                    </Text> 
     </TouchableOpacity> 


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

<View style={{ margin: 15 }}> 
               
               
            </View> 
            <View style = {styles.btnZone}>

            <Pressable style={[styles.unitsButton , {backgroundColor :initialCount===counter ? 'blue':'red'}]}
              onPress={()=>console.log("Units")}>
              <Text style={[styles.unitButtonText ]}>Units</Text> 
              </Pressable>
            
            <View style = {styles.counter}>
            {/* this.state.{selected === "btn1" ? "selected" : "notSelected"} */}
            {/* <Pressable  onPress={decrementCounter} style={[styles.decrementButton , {borderColor: initialCount===counter ? '#d4d4d4' : 'red'} ]} */}
            <Pressable disabled = { counter === 0}
             onPress={decrementCounter} style={[styles.decrementButton,selected === "btn1" ? styles.selected : styles.notSelected] }

            >
            <Feather name="minus" size={60} color={initialCount===counter ?'blue':'red'} />
          </Pressable>

          {/* <TextInput style = {styles.TextCounter}>
          <Text  >{count}</Text>
          </TextInput> */}
            {/* <View style = {[styles.tabBg,{backgroundColor: focused ? 'blue' :styles.tabBg.backgroundColor , borderRadius:10}]}> */}
          <Text style = {[styles.TextCounter,{color : initialCount===counter ? 'blue': 'red'}]}> 
                {counter} 
            </Text> 

           <Pressable disabled = { counter > initialCount ? true : false}
            onPress={incrementCounter}  style={[styles.incrementButton,selected === "btn2" ? styles.selected : styles.notSelected] }>
           <Feather name="plus" size={60}  color={initialCount===counter ?'#d4d4d4':'red'} /></Pressable>
            </View>



            {initialCount !== counter &&
            
              <View style = {{display:'flex',backgroundColor:'#d4d4d4' , 
              padding:15 ,marginVertical:5, borderRadius:10 ,
              alignItems:'center'}}>
                <Text style ={{fontSize:20 , color:'black'}}>
                  No Matching Quantity</Text>
                  </View>
            }
            
            
            
            <View style = {styles.approve} >
    <Pressable onPress={handleClosePopup} style={styles.nextButton}>
      <Text style={styles.approveButtonText}>Next</Text>
    </Pressable>
    <Pressable style={styles.cancelButton}
onPress={() => {setModalVisible(false);navigation.goBack()}}>
<Text style={styles.approveButtonText}>Cancel</Text> 
</Pressable>
    </View>  
    </View>          
    </Modal>
          :
          <View><Text>mODAL NOT</Text></View>
            
        }
      </View>
    
  );
}



const styles = StyleSheet.create({
  
  container: {
    //height:400,
    display:'flex',
    flexDirection:'row',
    //backgroundColor: '#d4d4d4',
    alignItems: 'center',
    // justifyContent: 'center',
    //padding:10
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
    //backgroundColor:'red',
    marginVertical:20
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
    resizeMode: 'cover',
    //marginLeft: 16,
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
  box:{
    //flex:1,
    //backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    
  },
  imageContainer:{
    flex:2,
    flexDirection:'column',
    //backgroundColor:'yellow',
    //marginBottom:20,
  },

  quantityBefore:{
    //backgroundColor:'green',
    marginTop:10
  },

  before:{
    //backgroundColor:'red',
alignSelf:'flex-end',
//paddingRight:20,
fontSize:20
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

  
 
  TextCounter: {
    //height: 60,
    flex: 1,
    padding: 5,
    marginTop:30,
    margin: 10,
    fontSize : 50,
    borderRadius : 25,
    //color:'red',
    //backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  
  text:{
    fontSize:30,
    paddingBottom:30,
    color : "blue"
  },
  btnZone:{
    flexDirection :'column',
    justifyContent: 'space-around',
    //width:400,
    //marginBottom:50
    },
    counter:{
      //backgroundColor:'pink',
      flexDirection :'row',
      //justifyContent:'space-around',
      alignItems:'center',
      marginBottom:20
    },
    approve:{
      marginVertical:20,
      flexDirection :'row',
      justifyContent:'space-evenly',
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
      width:150,
      //marginTop: 20,
      padding: 15,
      backgroundColor: 'blue',
      borderRadius: 15,
    },
     
     
    nextButton: {
       justifyContent: 'center',
       alignItems: 'center',
      width:180,
      padding: 15,
      backgroundColor: 'green',
      borderRadius: 15,
      
    },
    cancelButton: {
      justifyContent: 'center',
      alignItems: 'center',
     width:180,
     padding: 15,
     backgroundColor: '#36454F',
     borderRadius: 15,
   },
    incrementButton: {
      //flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      width:100,
      marginTop: 20,
      padding: 15,
      backgroundColor: '#d4d4d4',
      //borderColor:'yellow',
      borderWidth:2,
      borderRadius: 15,
    },

    selected :{
      color: '#fff',
      backgroundColor: '#00867d',
      border: '1px solid #00867d'
    },
    notSelected : {
      color: '#00867d',
      backgroundColor: '#f2f2f2',
      border: '1px solid #f2f2f2'
    },

    decrementButton: {
      //flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      width:100,
      marginTop: 20,
      padding: 15,
      backgroundColor: '#d4d4d4',
      borderColor:'#d4d4d4',
      borderWidth:2,
      borderRadius: 15,
    },
     unitsButton: {
      //flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      //width:'90%',
      marginTop: -10,
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 15,
    },
    approveButtonText: {
      color: 'white',
      fontSize: 20,
      //fontWeight: 'bold',
    },
    unitButtonText: {
      color: 'white',
      fontSize: 25,
      //fontWeight: 'bold',
    },
 
});
