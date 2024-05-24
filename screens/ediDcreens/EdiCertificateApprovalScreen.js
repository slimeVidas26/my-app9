import React, { useState, useCallback, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView, ImageBackground, View, FlatList, Dimensions, Image, Pressable, StyleSheet, Text, StatusBar, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { translation } from "../../i18n/supportedLanguages";
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import { Feather } from '@expo/vector-icons';
import { useQuery } from "@apollo/client";
import { DEPARTMENTS_QUERY } from '../../gql/Query';


const i18n = new I18n(translation)
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
// i18n.locale = 'ja';

const spacing = 5;
const width = (Dimensions.get('window').width);
const height = (Dimensions.get('window').height)




export function EdiCertificateApprovalScreen({ navigation }) {

  const { data, error, loading } = useQuery(DEPARTMENTS_QUERY);
  const lens = 11
    ;

  if (error) {
    console.error('DEPARTMENTS_QUERY error', error);
  }

  const DepartmentItem = ({ department }) => {
    const { title, id } = department;
    console.log(title, id)
    return (


        <View style={styles.item}>
          <View style = {{flex:1.5 , flexDirection:'row' , justifyContent:'space-evenly'  ,alignItems:'center'}}> 
            <Text style={styles.boxes}>1299</Text>
              <Feather name="box" size={26} color="blue" />
              </View>

              <View style = {{flex:3  , justifyContent:'center' , alignItems:'flex-end' , paddingRight:15}}> 
            <Text style = {{fontSize:20}}>Orange Juice one liter</Text>
            <Text style = {{fontSize:16}}>729000111444</Text>

          </View>
          <View style = {{flex:1 , alignItems:'flex-end'}}> 
          <Image style={styles.img} source={require('../../assets/gamadim.png')} />

          </View>


          {/* <View style={styles.top}>
            <View style={styles.left}>
              <Text style={styles.boxes}>12</Text>
              <Feather name="box" size={26} color="black" />
            </View>


            <View>
              <Image style={styles.img} source={require('../../assets/gamadim.png')} />
            </View>

          </View>

          <View style={styles.bottom}>
            <Text style={styles.quantity}>quantity : 48</Text>
            <Text style={styles.reference}>reference</Text>
            <Text style={styles.barcode}>729000111444</Text>

          </View> */}
        </View>
    )
  };

   const EdiCertificateApprovalScreenHeader = () => {
    return (
      <View style={styles.header}>
  
      <View style = {styles.leftSide} >
        <Text style = {{fontSize:20,color:'white'}}>6119516</Text>
        <Text  style = {{fontSize:20,color:'white'}}>Edi Certificate Approve</Text>
      </View>
  
      {/* <View  style = {styles.rightSide}>
        <AntDesign onPress={() => {
          navigation.navigate('Home')
        }} name="rightcircleo"
          size={35} color="white" />
         </View> */}
      </View>
    )
  }

  const ApproveButtons = () => {
    return (
      <View style={styles.approve} >
        <Pressable onPress={() =>navigation.navigate('EndEdiFormScreen')} style={styles.nextButton}>
          <Text style={styles.approveButtonText}>Next</Text>
        </Pressable>
        <Pressable style={styles.cancelButton}
          onPress={() => { navigation.goBack() }}>
          <Text style={styles.approveButtonText}>Cancel</Text>
        </Pressable>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <EdiCertificateApprovalScreenHeader/>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Check console for error logs</Text>}
      {!loading && !error && data &&
        <FlatList style={styles.flat}
          data={data.departments}
          //data={null}
          renderItem={({ item }) => (
            <DepartmentItem department={item} />)}
          //keyExtractor={(item, index) => index}
          keyExtractor={(item) => item.id}
        //style={styles.container}
        //numColumns={2}
        //columnWrapperStyle={styles.column}
        />
      }
      <ApproveButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "blue",

    display: 'flex',
    //gap: '1rem',
    //flexWrap: "nowrap",
    flexDirection: 'column',
    //height: height,
    margin: 5,
    //alignSelf: "stretch",
    //alignItems: 'center',
    justifyContent:'flex-start',

  },

  flat: {
    display: 'flex',
    //backgroundColor:'red',
    //width:'100%',
    //  marginLeft:20
    //justifyContent:'center'
    //alignItems:'center'
  },
  approve: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10
  },
  approveButtonText: {
    color: 'white',
    fontSize: 20,
    //fontWeight: 'bold',
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    padding: 15,
    backgroundColor: '#36454F',
    borderRadius: 15,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 15,

  },
  header: {
    backgroundColor: "red",
    display: 'flex',
    //width: '100%',
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    alignSelf: "stretch",
    margin:5,
    borderRadius:10,
    elevation: 3,

  },
  leftSide:{
    flex:1,
    flexDirection:'row',
    //backgroundColor:'red',
     //width:'50%' ,
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:8 ,
       paddingRight:8
      
  },

  rightSide:{
    //paddingTop:10,
     //backgroundColor:'yellow',
      // width:'80%' ,
      alignItems:'flex-end'
  },

  item: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white',
    borderColor: "#fff",
    borderWidth: 1,
    padding: 2,
    alignItems:'stretch',
    margin: 4,
    borderRadius: 20,
    width: width

    //marginVertical: 8,
    // marginHorizontal: 16,
  },
  closeButton: {
    //height:70,
    backgroundColor: 'blue',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'blue',
    padding: 18

  },
  closeButtonText: {
    color: 'white',
    fontSize: 22
  },
  top: {
    flex: 1,
    //backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 15

  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  boxes: {
    //backgroundColor:'yellow',
    fontSize: 20,
    color:'blue'
  },
  img: {
    //backgroundColor:'white',
    width: 70, height: 70
  },
  bottom: {
    flex: 1,
    //backgroundColor:'yellow',
    // margin:15,
    alignSelf: 'stretch',
    textAlign: 'right',


  },
  quantity: {
    //backgroundColor:'grey'
    fontSize: 20,
    // flexBasis:'100%'



  },
  reference: {
    //backgroundColor:'cyan',
    fontSize: 24,
    color: 'blue'

  },
  barcode: {
    //backgroundColor:'orange'
    fontSize: 18,


  },
  listItem: {
    margin: spacing,
    backgroundColor: 'grey',
    marginTop: 10,
    paddingVertical: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    //justifyContent: 'space-around',
    borderRadius: 10,
  },
  metaInfo: {
    flex: 1,

    //backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 2,
    flexDirection: "row", // main axis
    //justifyContent: "space-between", // main axis
    //marginLeft: 10,
    //marginRight: 10,
    marginTop: 15,
    //marginBottom: 0,
    paddingBottom: 40

  },
  metaInfo2: {
    //backgroundColor:'pink',
    borderRadius: 2,
    flex: 1,
    flexDirection: "column", // main axis
    justifyContent: "space-between", // main axis
    alignItems: 'flex-end',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    marginBottom: 0,
  },

  blueText: {
    fontSize: 24,
    color: 'blue',
    marginBottom: 5,

  },

  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  // barcode: {
  //   fontSize: 16,
  //   marginBottom: 20,
  // },

  image: {
    flex: 1,
    //justifyContent: 'space-between',
    //paddingBottom :200,

    //  width : null,
    //height : 220,
    //backgroundColor: '#0553',
    aspectRatio: 1.2,
    //   marginBottom : 80,
    //alignItems: 'flex-end',
    //position : 'relative',
    //top:30,
    //resizeMode: 'contain'
  },

  placeholder: {
    height: "35%",
    backgroundColor: "yellow",
    marginBottom: 30,
    marginTop: 30


  },


  column: {
    flexShrink: 1,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    borderColor: "#fff",
    borderWidth: 1,
    width: "45%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    margin: spacing,
    borderRadius: 10
  },

  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",

  },
  logoText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    top: '50%'

  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 20,
    display: 'none'
  },
  number: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
  },

  card: {

    width: width,
    margin: spacing,

    // borderColor: "#fff",
    // borderWidth: 1,
    // width: "45%",
    // // height: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 5
  },


  title: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});