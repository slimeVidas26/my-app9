//import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button ,
  Image,
  TextInput,TouchableOpacity , Modal } from 'react-native';
import React, { useState , useEffect } from "react";
import { translation } from '../../i18n/supportedLanguages';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()


import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';


// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n(translation);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
 i18n.locale = 'he';


//  const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-100%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor:'grey'
//   }
// };


  const EntryCertificate = ({navigation})=> {
  
  const [number, setNumber] = useState("toto");
  const [quantity, setQuantity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true)
  }, []) 
 
  return (
    <View style = {styles.container}>
    { modalVisible == true && 
        <Modal 
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          //style={customStyles}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          
             
          
       <View style = {{justifyContent:'center' , alignItems:'center' ,borderRadius:30, marginTop:120,backgroundColor:'yellow' , padding:30}}>
      
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*Number"
          placeholderTextColor="#808080"
          secureTextEntry={false}
          onChangeText={(number) => setNumber(number)} 
          keyboardType="numeric" 
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*Quantity"
          placeholderTextColor="#808080"
          secureTextEntry={false}
          onChangeText={(quantity) => setQuantity(quantity)} 
          keyboardType="numeric" 
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => {setModalVisible(false);navigation.goBack()}}>
        <Text style={styles.loginText}>Close Modal</Text> 
      </TouchableOpacity>
      </View>  
        </Modal>
      }
    
     </View>
     
  );
}





const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  inputView: {
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    width: "70%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    marginHorizontal:50
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
    marginHorizontal:80
   
  },

  loginText :{
    fontSize : 20,
    color :'white'
  },
  text:{
    fontSize:30,
    paddingBottom:30,
    color : "blue"
  }
 
});

export default EntryCertificate
