//import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable,Keyboard, Image,Alert ,  TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { translation } from '../../i18n/supportedLanguages';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import Modal from '../../components/modals/Modal';
import { Feather } from '@expo/vector-icons';
import { OpenModalButtonApproval } from '../../components/modals/OpenModalButonApproval';
import { useRoute } from '@react-navigation/native';



// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n(translation);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
i18n.locale = 'he';






export const EdiItemApprovalScreen = ({ navigation , data }) => {
  console.log("data from ediItemApprovalScreen" , data)

  const route = useRoute();
  const { quantity = 0  , name , supplier = "toto"} = route.params || {};

  const [isModalOpen, setModalOpen] = useState(true);
  const initialCount = 10;
  const [counter, setCounter] = useState(0);


  const InfoProduct = ({initialCountProp , counterProp})=>{
    return(
      <View style={styles.infoProductZone}>
            <View style={styles.detailsContainer}>
              <Text style={styles.compagny}>{supplier}</Text>
              <Text style={[styles.productName, { color: counterProp === initialCountProp ? 'blue' : styles.productName.color }]}>
                Gamadim 100 gl</Text>
              <Text style={styles.productCode}>
                72900000025487 </Text>
              <Text style={styles.productQuantityInStock}>
                Quantity in stock:104</Text>
              <View style={styles.box}>
                <View style={styles.oneBox}>
                  <Text style={styles.boxes}>12</Text>
                  <Feather name="box" size={26} color="black" />
                </View>

                <View style={styles.oneBox}>
                  <Text style={styles.boxes}>12</Text>
                  <Feather name="box" size={26} color="black" />
                </View>
                <View style={styles.oneBox}>
                  <Text style={styles.boxes}>12</Text>
                  <Feather name="box" size={26} color="black" />
                </View>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.productImage}
                //source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your product image URL
                source={require('../../assets/gamadim.png')} // Replace with your product image URL
              />

            </View>

          </View>
    )
  }


  const Counter = ({initialCountProp , counterProp})=>{
  
    const minLimit = 0;

    const maxLimit = initialCount;
    const [selected, setSelected] = useState(null)
    const [matching, setMatching] = useState(false)


    const changeColor = (btn) => {
      setSelected(btn);
    };


  const decrementCounter = () => {
    if (counter > minLimit) {
      setCounter(counterProp - 1);
      changeColor('minus');
    }
  };

  const incrementCounter = () => {
    if (counterProp < maxLimit) {
      setCounter(counterProp + 1);
      changeColor('plus');
    }
  };

  const handleQuantity = () => {
    setCounter(initialCountProp);
    setMatching(true)
  };

  const handleChange = (number) => {
    const newValue = parseInt(number, 10);
    if (!isNaN(newValue) && newValue >= minLimit && newValue <= maxLimit) {
      setCounter(newValue);
    }
      else {
       Alert.alert('Invalid input', `Enter a number between ${minLimit} and ${maxLimit}`);
     }
  };
  
    return(
      <>
       <TouchableOpacity style={styles.quantityBefore} onPress={handleQuantity}  >
            <Text style={styles.before}>
              Quantity before:{quantity}
            </Text>
          </TouchableOpacity>
     
      <View style={styles.counterZone}>
      <Pressable style={[styles.unitsButton, { backgroundColor: initialCountProp === counter ? 'blue' : styles.unitsButton.backgroundColor }]}
        onPress={Keyboard.dismiss}>
        <Text style={[styles.unitButtonText]}>Units</Text>
      </Pressable>
  
      <View style={styles.counter}>
  
        <Pressable
          onPress={decrementCounter} style={[styles.counterButton, selected === "minus" ? styles.selected : styles.notSelected, { borderColor: counter === 0 || counter === initialCount ? '#d4d4d4' : styles.selected.borderColor }]}
        >
          <Feather name="minus" size={60} color={initialCountProp === counterProp ? 'blue' : counterProp === 0 ? '#f2f2f2' : 'red'} />
        </Pressable>
  
  
        {/* <View style = {[styles.tabBg,{backgroundColor: focused ? 'blue' :styles.tabBg.backgroundColor , borderRadius:10}]}> */}
        <TextInput style={[styles.TextCounter, { color: initialCountProp === counterProp ? 'blue' : styles.TextCounter.color }]}
          value={String(counterProp)}
          keyboardType="numeric"
          onChangeText={handleChange} />
  
        <Pressable
          onPress={incrementCounter} style={[styles.counterButton, selected === "plus" ? styles.selected : styles.notSelected, { borderColor: initialCount === counter ? '#f2f2f2' : styles.selected.borderColor }]}>
          <Feather name="plus" size={60} color={initialCountProp === counterProp ? '#f2f2f2' : 'red'} /></Pressable>
      </View>
  
      {initialCountProp !== counterProp &&
         <>
        {/* <View style={styles.noMatching}> */}
          {/* <Text style={styles.noMatchingText}>
            No Matching Quantity</Text> */}
            <OpenModalButtonApproval data = {data}/>

        {/* </View> */}

        </>

        
      }
  
          </View>
          </>
    )
  }

  const ApproveButtons = ()=>{

    const handleClosePopup = () => {
      setModalOpen(false);
    };
    return(
      <View style={styles.approve} >
      <Pressable onPress={() => navigation.navigate('EdiOrderDetailsScreenOpen')} style={styles.nextButton}>
        <Text style={styles.approveButtonText}>Next</Text>
      </Pressable>
      <Pressable style={styles.cancelButton}
        onPress={() => { setModalOpen(false); navigation.goBack() }}>
        <Text style={styles.approveButtonText}>Cancel</Text>
      </Pressable>
   
    </View>
    )
  }

  

  return (

    <View style={styles.modalContainer}>
      {isModalOpen == true ?
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalOpen}
        >

          {/* INFO PRODUCT ZONE */}
                 <InfoProduct initialCountProp={initialCount} counterProp={counter}/>

          {/* COUNTER ZONE */}
                <Counter initialCountProp={initialCount} counterProp={counter}/>
               
          {/* APPROVE BUTTONS */}
              <ApproveButtons/>
        </Modal>        :
        <View><Text>{null}</Text></View>

      }
    </View>

  );
}



const styles = StyleSheet.create({

  infoProductZone: {
    //height:400,
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: '#d4d4d4',
    alignItems: 'center',
    // justifyContent: 'center',
    //paddingVertical:10
  },
  modalContainer: {
    //height:400,
    display: 'flex',
    flexDirection: 'row',
     backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop:10
  },
  detailsContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green',
    marginVertical: 20
  },
  compagny: {
    fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 8,
     //backgroundColor:'red',
     width:'100%'
  },
  productName: {
    //backgroundColor:'yellow',
    fontSize: 20,
    width: '100%',
    //fontWeight: 'bold',
    marginBottom: 8,
    color: 'red'
  },
  productCode: {
    //backgroundColor:'red',
    width: '100%',
    fontSize: 18,
    //fontWeight: 'bold',
    marginBottom: 8,
    //color:'blue'
  },
  productQuantityInStock: {
    width: '100%',
    //backgroundColor:'red',
    fontSize: 18,
    //fontWeight: 'bold',
    marginBottom: 8,
    //color:'blue'
  },
  

  productImage: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    //marginLeft: 16,
  },

  img: {
    backgroundColor: 'white',
    width: 100, height: 168,
    alignSelf: 'flex-end'
  },
  boxes: {
    //backgroundColor:'yellow',
    fontSize: 18,
    marginRight: 4

  },
  box: {
    //flex:1,
    width: '100%',
    //backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  oneBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline'
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'column',
    //backgroundColor:'yellow',
    //marginBottom:20,
  },

  quantityBefore: {
    //backgroundColor:'green',
    marginTop: 10
  },

  before: {
    //backgroundColor:'red',
    alignSelf: 'flex-end',
    //paddingRight:20,
    fontSize: 20
  },
  TextCounter: {
    //height: 60,
    flex: 1,
    padding: 5,
    marginTop: 30,
    margin: 12,
    fontSize: 55,
    borderRadius: 25,
    color: 'red',
    //backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },

  text: {
    fontSize: 30,
    paddingBottom: 30,
    color: "blue"
  },
  counterZone: {
    marginVertical:30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    //width:400,
    //marginBottom:50
  },
  counter: {
    //backgroundColor:'pink',
    flexDirection: 'row',
    //justifyContent:'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  approve: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 15,

  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    padding: 15,
    backgroundColor: '#36454F',
    borderRadius: 15,
  },
  counterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginTop: 20,
    padding: 15,
    backgroundColor: '#d4d4d4',
    borderWidth: 2,
    borderRadius: 15
  },

  selected: {
    color: '#fff',
    //backgroundColor: '#00867d',
    //border: '1px solid #00867d'
    borderWidth: 1,
    borderColor: 'red'
  },
  notSelected: {
    color: '#00867d',
    backgroundColor: '#d4d4d4',
    borderColor: 'red'

    //border: '1px solid #f2f2f2'
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

  noMatching: {
    display: 'flex',
    backgroundColor: '#d4d4d4',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center'
  },
  noMatchingText: {
    fontSize: 20,
    color: 'black'
  }

});
