import React, { useState, useRef } from 'react';
import { SafeAreaView,Modal,FlatList,StatusBar, Text, TextInput,TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View,ScrollView, StyleSheet,Pressable, Button, Alert } from 'react-native';
import Signature from 'react-native-signature-canvas';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';
import { OpenModalButton } from '../../components/modals/OpenModalButon';



// const MyForm = ()=> {
//   const [myCar, setMyCar] = useState("Volvo");

//   return (
//     // <View style={styles.container}>
//       <Picker
//         selectedValue={myCar}
//         onValueChange={(itemValue) => setMyCar(itemValue)}
//       >
//         <Picker.Item label="Ford" value="Ford" />
//         <Picker.Item label="Volvo" value="Volvo" />
//         <Picker.Item label="Fiat" value="Fiat" />
//       </Picker>
//     // </View>
//   );
// }



export function EndEdiFormScreen({navigation}) { 


  const [reason, setReason] = useState('Choose Reason');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState(''); 
  const [phone , setPhone] = useState('');
  const [car, setCar] = useState(''); 
  const [signature, setSignature] = useState('');
  const [comment, setComment] = useState(''); 



  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  const signRef = useRef(null);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Lack',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Excess',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Missing EDI',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      title: 'Invalid code',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fvv91aa97f63',
      title: 'Item not ordered',
    },
    {
      id: '58694a0f-3da1-555f-bd96-145571e29d72',
      title: 'Supplier left goods uninspected',
    },
    {
      id: '58694a0f-3da1-471f-bd74-145571e29d72',
      title: 'Choose reason',
    },
  ];
  
  
  //  const renderItem = ({item}) =>{
  //   //const backgroundColor = item.id === selectedId ? '#696969' : '#696969';
  //   const color = item.id === selectedId ? 'red' : 'white';

  //   return (
  //   <TouchableOpacity onPress = {
  //     ()=>{console.log(item.title);
  //          setSelectedId(item.id);
  //          setModalVisible(false);setReason(item.title)}} style={styles.item}>
       
  //      <Text style={styles.itemTitle}>{item.title}</Text>
  //      <Text style={[styles.itemCircle , {color}]}>{`\u29BF`}</Text>
       
     
  //    </TouchableOpacity>
  //  )
  // };


  const ApproveButtons = () => {
    return (
      
    //   <View style={[styles.approve , { opacity: isFormValid ? 1 : 0.5 }]} disabled={!isFormValid} >
    <View style={styles.approve } >

      
        {/* <Pressable style={styles.nextButton} onPress={()=>{validateForm,navigation.navigate('EdiCertificateConfirmationScreen')}} > */}
        <Pressable style={styles.nextButton} onPress={handleSubmit} >

          <Text style={styles.approveButtonText}>Next</Text>
        </Pressable>


        <Pressable style={styles.cancelButton}
          onPress={() => { navigation.goBack() }}>
          <Text style={styles.approveButtonText}>Cancel</Text>
        </Pressable>

      </View>
    
    )
  }

  // const handleSubmit = () => {
    const validateForm = () => {
      let errors = {};
    console.log('Signature:', signature);
    if (!name) { 
			errors.name = 'Name is required.'; 
		}
        // Validate phone field 
		if (!phone) { 
			errors.phone = 'Phone is required.'; 
		 } 
        if (!car) { 
			errors.car = 'Car is required.'; 
		} else if (car.length < 6) { 
			errors.car = 'Car must be at least 6 characters.'; 
		} 

    

        if (!signature) { 
			errors.signature = 'Signature is required.'; 
		 } 
        //  else if (.length < 6) { 
		// 	errors.car = 'Car must be at least 6 characters.'; 
		// } 

    //     if (!reason) { 
		// 	errors.reason = 'Reason is required.'; 
		// } else if (reason.length < 6) { 
		// 	errors.reason = 'Reason must be at least 6 characters.'; 
		// } 

    //     if (!comment) { 
		// 	errors.comment = 'Comment is required.'; 
		// } else if (comment.length < 6) { 
		// 	errors.comment = 'comment must be at least 6 characters.'; 
		// } 
    setErrors(errors); 
		setIsFormValid(Object.keys(errors).length === 0); 
    // setErrors('');
    // Alert.alert('Submitted', `First Name: ${name}, Last Name: ${phone}, Signature: ${signature}`);
  };

  const handleSubmit = () => { 
		if (isFormValid ) { 
			// Form is valid, perform the submission logic 
			console.log('Form submitted successfully!');
            navigation.navigate('EdiCertificateConfirmationScreen') 
            
		} else { 
			// Form is invalid, display error messages 
			console.log('Form has errors. Please correct them.'); 
            validateForm()
           
            
		} 
	}; 



  // Called after end of stroke
  const handleEnd = () => {
    signRef.current.readSignature();
  };

  const handleSignature = (sig) => {
    console.log('Captured Signature:', sig);
    setSignature(sig);
  };
  

  const handleClear = () => {
    setSignature('');
    signRef.current.clearSignature();
  };

  return (
    // <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.scrollView}>
    <KeyboardAwareScrollView>
    <View style={styles.inner}>

        <Text style={styles.title}>Edi Certificate Confirmation</Text>
        <Text style={styles.ref}>Reference : 4707342</Text>

       

           <Text style = {styles.sidePlaceholder}>{name ? "Name*" : " "}</Text>
        	<TextInput 
				style={[styles.input , { borderBottomColor: errors.name ? 'red' : styles.input.borderBottomColor } ] } 
				placeholder="Name*"
				value={name} 
				onChangeText= {setName}
			/> 
      <Text style = {styles.error}>
        {name ? errors.name==='' : errors.name}
        </Text>
     
        <Text style = {styles.sidePlaceholder}>{phone ? "Phone*" : " "}</Text>
      <TextInput 
        style={[styles.input , { borderBottomColor: errors.phone ? 'red' : styles.input.borderBottomColor } ] }
        placeholder="Phone"
				value={phone} 
				onChangeText={setPhone} 
			/> 
       <Text style = {styles.error}>
           {phone ? errors.phone==='' : errors.phone}
            </Text>
     

      <Text style = {styles.sidePlaceholder}>{car ? "Car*" : " "}</Text>
      <TextInput 
				style={[styles.input , { borderBottomColor: errors.car ? 'red' : styles.input.borderBottomColor } ] }  
				placeholder="Car"
				value={car} 
				onChangeText={setCar} 
				//secureTextEntry 
			/> 
       <Text style = {styles.error}>
             {car ? errors.car ==='' : errors.car}
                </Text>



        {/* <Text style={styles.label}>Signature</Text> */}
        <View style={[styles.signatureContainer , { borderBottomColor: errors.signature ? 'red' : styles.signatureContainer.borderBottomColor }]}>
          <Signature
            ref={signRef}
            onEnd={handleEnd}
            onOK={handleSignature}
            onEmpty={() => setSignature('')}
            descriptionText="Sign"
            clearText="Clear"
            confirmText="Save"
            webStyle={styles.signatureWebStyle}
          />
          
        </View>
        <Text style = {styles.error}>
             {signature ? errors.signature ==='' : errors.signature}
                </Text>


                

        
        <View style={styles.formGroup}>
        <Text style = {styles.redStamp}>
          Red Stamp
        </Text>
        <OpenModalButton data = {DATA}/>
        {/* <Pressable style ={styles.input} onPress={() => setModalVisible(!modalVisible)} > 
        <Text style = {styles.chooseReasonText}>{reason}</Text>
        </Pressable> */}

     

      
       
      </View>

      <Text style = {styles.sidePlaceholder}>{comment ? "Comment*" : " "}</Text>
       <TextInput 
				style={[styles.input , { borderBottomColor: errors.comment ? 'red' : styles.input.borderBottomColor } ] }  
				placeholder="Comment"
				value={comment} 
				onChangeText={setComment} 
				//secureTextEntry 
			/> 
       <Text style = {styles.error}>
             {comment ? errors.comment ==='' : errors.comment}
                </Text>
       

        {/* {signature ? (
          <Button title="Clear Signature" onPress={handleClear} />
        ) : null} */}
     
      {/* {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} */}
      <ApproveButtons/>
      </View>
      </KeyboardAwareScrollView>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // padding: 16,
    //marginTop: StatusBar.currentHeight || 0,
  },

  inner: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
  },
  
  formGroup: {
    marginBottom: 16,
  },
  title:{
    color:'blue',
    fontSize:22,
    textAlign:'right',
    marginBottom:30
  },
  sidePlaceholder:{
    position:'relative',
    top:24,
    right:10,
    zIndex:100,
    fontSize:16,
    textAlign:'right',
  },
  
  ref:{
    fontSize:18,
    textAlign:'right',
    marginBottom:20

  },
  redStamp:{
    position:'relative',
     top : 22,
     left: 10,
     color:'red',
     zIndex:100,
     fontSize:16
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  // },

  // modalContainer:{
  //   flex: 1,
  //   //marginTop: StatusBar.currentHeight || 0,
   
  // },
  // modalView: {
  //    margin: 0,
  //    padding:0,
  //   width:375,
  //   height:555,
  //   backgroundColor: 'white',
  //   //borderRadius: 20,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  // },
  // item: {
  //   flex:1,
  //   flexDirection:'row',
  //   justifyContent:'space-between',
  //   alignItems:'stretch',
  //   backgroundColor: '#696969',
  //    padding: 15,
  //    marginVertical: 2,
  //   //margin:20,
  //   width:375,
  //   height:75

  //   //marginHorizontal: 2,
    
  // },
  // itemTitle: {
  //   fontSize: 22,
  //   //textAlign:'right',
  //   color:'#FFF'
  // },
  // itemCircle: {
  //   fontSize: 22,
  //   //textAlign:'left',
  //   color:'#FFF'
  // },
  
  input: { 
    flex:1,
		height: 70, 
		borderBottomColor:'#ccc',
    backgroundColor:'#ccc' ,
		//borderWidth: 1, 
    borderBottomWidth:1,
		//marginBottom: 12, 
		paddingHorizontal: 10, 
		borderRadius: 8, 
		fontSize: 18, 
    textAlign:'center',
    justifyContent:'center',
    
	}, 
  // chooseReasonText:{
  //   fontSize: 18,
  //   textAlign:'center',  
  // },
  // label: {
  //   fontSize: 16,
  //   marginBottom: 8,
  // },
  // input: {
  //   height: 40,
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   paddingHorizontal: 8,
  //   borderRadius: 4,
  // },
  signatureContainer: {
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    //borderColor: '#ccc',
    // backgroundColor:'red',
    // borderWidth: 1,
    height: 180,
    
  },
  signatureWebStyle: `
    .m-signature-pad {
      box-shadow: none; 
      border: none; 
    }
    .m-signature-pad--body {
      border: none;
      background-color: #ccc;
    }
    .m-signature-pad--footer {
      display: none;
      margin: 0px;
    }
    body,html {
      width: 100%; height: 100%;
    }
  `,
 
  approve: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop:10
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
  error: { 
		color: 'red', 
		fontSize: 16, 
		marginBottom: 10, 
        //backgroundColor:'red'
	}, 
});

