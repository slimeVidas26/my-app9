import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, TextInput, View,ScrollView, StyleSheet,Pressable, Button, Alert } from 'react-native';
import Signature from 'react-native-signature-canvas';

export function EndEdiFormScreen({navigation}) { 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState(''); 
  const [phone , setPhone] = useState('');
  const [car, setCar] = useState(''); 
  const [signature, setSignature] = useState('');
  const [reason, setReason] = useState(''); 
  const [comment, setComment] = useState(''); 


  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  const signRef = useRef(null);

  


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

        if (!reason) { 
			errors.reason = 'Reason is required.'; 
		} else if (reason.length < 6) { 
			errors.reason = 'Reason must be at least 6 characters.'; 
		} 

        if (!comment) { 
			errors.comment = 'Comment is required.'; 
		} else if (comment.length < 6) { 
			errors.comment = 'comment must be at least 6 characters.'; 
		} 
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
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
      <View style={styles.formGroup}>
       
        	<TextInput 
				style={styles.input} 
				placeholder="Name*"
				value={name} 
				onChangeText= {setName}
			/> 
      <Text style = {styles.error}>
        {name ? errors.name==='' : errors.name}
        </Text>
     
      <TextInput 
				style={styles.input} 
				placeholder="Phone"
				value={phone} 
				onChangeText={setPhone} 
			/> 
       <Text style = {styles.error}>
           {phone ? errors.phone==='' : errors.phone}
            </Text>
     
      <TextInput 
				style={styles.input} 
				placeholder="Car"
				value={car} 
				onChangeText={setCar} 
				//secureTextEntry 
			/> 
       <Text style = {styles.error}>
             {car ? errors.car ==='' : errors.car}
                </Text>
     
        {/* <Text style={styles.label}>Signature</Text> */}
        <View style={styles.signatureContainer}>
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
           <Text style = {styles.error}>
             {signature ? errors.signature ==='' : errors.signature}
                </Text>
        </View>

        
        <TextInput 
				style={styles.input} 
				placeholder="Reason"
				value={reason} 
				onChangeText={setReason} 
				//secureTextEntry 
			/> 
       <Text style = {styles.error}>
             {reason ? errors.reason ==='' : errors.reason}
                </Text>
      

       
       <TextInput 
				style={styles.input} 
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
      </View>
      {/* {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} */}
      <ApproveButtons/>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  
  formGroup: {
    marginBottom: 16,
  },
  input: { 
		height: 60, 
		borderColor: '#ccc',
        backgroundColor:'#ccc' ,
		borderWidth: 1, 
		//marginBottom: 12, 
		paddingHorizontal: 10, 
		borderRadius: 8, 
		fontSize: 16, 
        textAlign:'center'
	}, 
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
    borderColor: '#ccc',
    // backgroundColor:'red',
    borderWidth: 1,
    height: 200,
    
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

