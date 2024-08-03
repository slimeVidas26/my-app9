import React, { useState , useCallback, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView,ImageBackground,View,Pressable,FlatList,Dimensions,Image, StyleSheet,Text,StatusBar,Button,TouchableOpacity,TextInput,ActivityIndicator} from 'react-native';
import { I18n } from 'i18n-js';
import { translation } from "../../i18n/supportedLanguages";
import * as Localization from 'expo-localization';
import Constants from 'expo-constants';
import { Card } from '@rneui/themed';
//import logo from '../assets/warehouse.png'
import { Feather } from '@expo/vector-icons';

const i18n = new I18n(translation)


// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
// i18n.locale = 'ja';

const spacing = 5;
const width = (Dimensions.get('window').width - 2) / 2;
const height = (Dimensions.get('window').height)

export function EdiOrderDetailsScreenClosed({navigation , data , error , loading}) {

  

const DepartmentItem = ({ department}) => {
  const { title , id } = department; 
  console.log( title , id)
return(


<TouchableOpacity  onPress={() => navigation.navigate('EdiItemApprovalScreen')}>
<View style = {styles.item}>

<View style = {styles.top}>
  <View style = {styles.left}>
     <Text style = {styles.boxes}>12</Text>   
     <Feather name="box" size={26} color="black" />
  </View>


<View>
<Image   style={styles.img} source={require('../../assets/gamadim.png')}/>
</View>

</View>

<View style = {styles.bottom}>
<Text style = {styles.quantity}>quantity : 48</Text>
<Text style = {styles.reference}>reference</Text>
<Text style = {styles.barcode}>729000111444</Text>

</View>




</View>

   </TouchableOpacity>
 
)

};

  return (
    <View style={styles.container}>

  {/* <EdiOrderDetailHeader/> */}
  {/* <EdiTab/> */}

    {/* <View style = {styles.image}>
    <Image  source={require('../assets/today.jpg')}
    placeholder={"rami-levi"}
        contentFit="cover"
        transition={1000} />
    </View> */}

    {/* <View style = {styles.placeholder}></View> */}

    {/* <ImageBackground source={logo} resizeMode="cover" style={styles.image}> */}
      {/* <Text style={styles.logoText}>What We Will Do Today ?</Text> */}
    {/* </ImageBackground> */}

    {loading && <Text>Loading...</Text>}
      {error && <Text>Check console for error logs</Text>}
      {!loading && !error && data && 
      <FlatList style = {styles.flat}
        data={data.departments}
        renderItem={({ item }) => (
          <DepartmentItem department={item} />)}
        //keyExtractor={(item, index) => index}
        keyExtractor = {(item) => item.id}
        //style={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />}
      <Pressable style={styles.closeButton}
        onPress={() =>{navigation.navigate('EdiCertificateApprovalScreen')} }>
        <Text style={styles.closeButtonText}>Close Certificate from closed</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",

    display: 'flex',
    //gap: '1rem',
    //flexWrap: "nowrap",
    flexDirection: 'column',  
    height:height-300,
    //marginTop: 14,
    //alignSelf: "stretch",
    alignItems:'center',
    //justifyContent:'flex-end',

  },

  flat:{
  display:'flex',
    //backgroundColor:'white',
   width:'100%',
  //  marginLeft:20
   //justifyContent:'center'
   //alignItems:'center'
  },
  closeButton:{ 
    //height:70,
    backgroundColor:'blue',
    borderRadius:15,
    flexDirection:'row' ,
    justifyContent:'space-evenly',
     alignItems:'center',
     width:'95%' ,
    borderRadius:10,
    backgroundColor:'blue',
    padding:18
    
     },
     closeButtonText:{
    color :'white',
    fontSize:22
     },
    top:{
      flex:1,
    //backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:5,
    marginBottom:15
    
    },

  item: {
    display:'flex',
    backgroundColor:'white',
   borderColor: "#fff",
   borderWidth: 1,
   padding: 18,
   //alignItems:'stretch',
   margin:5,
   borderRadius:20,
   width:width -8
   
   //marginVertical: 8,
  // marginHorizontal: 16,
 },
top:{
  flex:1,
//backgroundColor:'red',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
padding:5,
marginBottom:15

},
left:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  
},
boxes:{
//backgroundColor:'yellow',
fontSize:18
},
img:{
  //backgroundColor:'white',
  width: 100, height: 100

 

},
bottom:{
  flex:1,
  //backgroundColor:'yellow',
  // margin:15,
  alignSelf:'stretch',
  textAlign:'right',
  

},
quantity:{
  //backgroundColor:'grey'
  fontSize:20,
  // flexBasis:'100%'



},
reference:{
  //backgroundColor:'cyan',
  fontSize:24,
  color:'blue'

},
barcode:{
  //backgroundColor:'orange'
  fontSize:18,


},
  listItem: {
    margin: spacing,
    backgroundColor:'grey',
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
     alignItems:'center',
     justifyContent:'space-between',
    borderRadius: 2,
    flexDirection: "row", // main axis
    //justifyContent: "space-between", // main axis
    //marginLeft: 10,
    //marginRight: 10,
    marginTop: 15,
    //marginBottom: 0,
        paddingBottom:40

  },
  metaInfo2: {
    //backgroundColor:'pink',
    borderRadius: 2,
    flex: 1,
    flexDirection: "column", // main axis
    justifyContent: "space-between", // main axis
    alignItems:'flex-end',
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

  placeholder :{
    height: "35%",
    backgroundColor:"yellow",
    marginBottom : 30,
    marginTop : 30


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
    borderRadius: 10  },

  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    
  },
  logoText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    textAlign:'center',
    top:'50%'
    
  },
  icon: {
    position: 'absolute',
    right: 15,
    top:20,
    display:'none'
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
       borderRadius:10,
       padding:5
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