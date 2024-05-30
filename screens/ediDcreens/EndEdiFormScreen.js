//https://www.geeksforgeeks.org/how-to-implement-form-validation-in-react-native/

import React, { useState, useEffect , useRef } from 'react'; 
import { View, TextInput, TouchableOpacity,Pressable,Button,SafeAreaView, ScrollView,
	Text, StyleSheet } from 'react-native'; 
    import SignatureCanvas from 'react-native-signature-canvas';

import { Sign } from '../../components/EDICertificate/Signature';
//import { SignatureScreen } from '../../components/EDICertificate/SignatureScreen';

 export function EndEdiFormScreen({navigation}) { 

    const signatureRef = useRef();
    console.log(signatureRef)
    //const [signature, setSign] = useState(null);
    const [empty , setEmpty] = useState('')
  
    const handleSignature = (signature) => {
      console.log(signature); // signature is a base64 encoded string
    };
  
     
  
    const handleClear = () => {
      console.log('Signature cleared');
      signatureRef.current.erase()
    };
  
    const handleEmpty = () => {
      console.log("Empty");
      console.log("s",signature);
  
      setEmpty('Canvas cant be empty')
      errors.signature = empty
    };
  
    // const checkIfCanvasIsBlank = () => {
    //   if (signatureRef.current) {
    //     console.log(signatureRef.current.readSignature())
    //     signatureRef.current.readSignature()
    //       .then((toto) => {
    //         if (toto) {
    //           // Alert.alert('Canvas is blank');
    //           <Text style = {styles.error}>Canvas is blank</Text>
    //         } else {
    //           // Alert.alert('Canvas is not blank');
    //           <Text style = {styles.error}>Canvas is not blank</Text>
  
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Error checking if canvas is empty:', error);
    //       });
    //   }
    // };
  
     // Called after end of stroke
     const handleEnd = () => {
      signatureRef.current.readSignature();
    };
  
    // Called after ref.current.readSignature() reads a non-empty base64 string
    const handleOK = (signature) => {
      console.log(signature);
      setEmpty('')
      //onOK(signature);  Callback from Component props
    };
  
    // Called after ref.current.getData()
    const handleData = (data) => {
      console.log(data);
    };
  
   

    const ApproveButtons = () => {
        return (
          
        //   <View style={[styles.approve , { opacity: isFormValid ? 1 : 0.5 }]} disabled={!isFormValid} >
        <View style={styles.approve } >

          
            {/* <Pressable style={styles.nextButton} onPress={()=>{validateForm,navigation.navigate('EdiCertificateConfirmationScreen')}} > */}
            <Pressable style={styles.nextButton} onPress={()=>{handleSubmit()}} >

              <Text style={styles.approveButtonText}>Next</Text>
            </Pressable>


            <Pressable style={styles.cancelButton}
              onPress={() => { navigation.goBack() }}>
              <Text style={styles.approveButtonText}>Cancel</Text>
            </Pressable>
    
          </View>
        
        )
      }

	// State variables to store form inputs, 
	// errors, and form validity 
	const [name, setName] = useState(''); 
    const [phone , setPhone] = useState('');
    const [car, setCar] = useState(''); 
    const [signature, setSignature] = useState(''); 
    const [reason, setReason] = useState(''); 
    const [comment, setComment] = useState(''); 



	const [errors, setErrors] = useState({}); 
	const [isFormValid, setIsFormValid] = useState(false); 

	//   useEffect(() => { 

	//  	// Trigger form validation when name, 
	//   	// email, or password changes 
	//   	validateForm(); 
	//   }, [name, phone, car , reason , comment]); 

	const validateForm = () => { 
		let errors = {}; 

		// Validate name field 
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

		// Set the errors and update form validity 
		setErrors(errors); 
		setIsFormValid(Object.keys(errors).length === 0); 
	}; 

	const handleSubmit = () => { 
		if (isFormValid && empty === '') { 
			// Form is valid, perform the submission logic 
			console.log('Form submitted successfully!');
            navigation.navigate('EdiCertificateConfirmationScreen') 
            
		} else { 
			// Form is invalid, display error messages 
			console.log('Form has errors. Please correct them.'); 
            validateForm()
            handleEmpty()
            //handleOK()
            
		} 
	}; 

	return ( 
        <SafeAreaView style={styles.container}>
             {/* <ScrollView style={styles.scrollView}> */}
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


            {/* <Sign/> */}
            <SignatureCanvas
       ref={signatureRef}
        onOK={handleOK}
        onEnd  = {handleEnd}
        //onConfirm = {handleConfirm}
        onEmpty={handleEmpty}
        onGetData={handleData}
        onClear={handleClear}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={`
          .m-signature-pad--footer {
            display: none;
          }
          .m-signature-pad {
            box-shadow: none;
            border: none;
          }
          .m-signature-pad--body {
            background-color: #ccc;
          }
        `}
        style={styles.signatureCanvas}
      />
       <Text style = {styles.error}>{empty}</Text>
       {/* <Button title="Check if Canvas is Blank" onPress={handleEmpty} /> */}
       {/* <Button title="Check if Canvas signature" onPress={handleSignature} />
       <Button title="Check handleClear" onPress={handleClear} />
       <Button title="Check handleEnd" onPress={handleEnd} />
       <Button title="Check handleOK" onPress={handleOK} />
       <Button title="Check handleData" onPress={handleData} />
       <Button title="Check handleConfirm" onPress={handleConfirm} /> */}

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
            {comment ? errors.comment ==='' : errors.name}
                </Text>

			<ApproveButtons/>
			
			{/* Display error messages */} 
			{/* {Object.values(errors).map((error, index) => ( 
				<Text key={index} style={styles.error}> 
					{error} 
				</Text> 
			))}  */}
             {/* </ScrollView> */}
		</SafeAreaView> 
	); 
}; 

// Styles for the components 
const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 16, 
		justifyContent: 'center', 
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
	button: { 
		backgroundColor: 'green', 
		borderRadius: 8, 
		paddingVertical: 10, 
		alignItems: 'center', 
		marginTop: 16, 
		marginBottom: 12, 
	}, 
	buttonText: { 
		color: '#fff', 
		fontWeight: 'bold', 
		fontSize: 16, 
	}, 
	error: { 
		color: 'red', 
		fontSize: 16, 
		marginBottom: 10, 
        //backgroundColor:'red'
	}, 
}); 

export default EndEdiFormScreen;
