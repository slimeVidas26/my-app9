//https://www.geeksforgeeks.org/how-to-implement-form-validation-in-react-native/

import React, { useState, useEffect } from 'react'; 
import { View, TextInput, TouchableOpacity,Pressable,SafeAreaView, ScrollView,
	Text, StyleSheet } from 'react-native'; 

import { Sign } from '../../components/EDICertificate/Signature';
 export function EndEdiFormScreen({navigation}) { 

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
		if (isFormValid) { 
			// Form is valid, perform the submission logic 
			console.log('Form submitted successfully!');
            navigation.navigate('EdiCertificateConfirmationScreen') 
            
		} else { 
			// Form is invalid, display error messages 
			console.log('Form has errors. Please correct them.'); 
            validateForm()
		} 
	}; 

	return ( 
        <SafeAreaView style={styles.container}>
             <ScrollView style={styles.scrollView}>
			<TextInput 
				style={styles.input} 
				placeholder="Name*"
				value={name} 
				onChangeText={setName} 
			/> 
            <Text style = {styles.error}>{errors.name}</Text>
			<TextInput 
				style={styles.input} 
				placeholder="Phone"
				value={phone} 
				onChangeText={setPhone} 
			/> 
           <Text style = {styles.error}>{errors.phone}</Text>

			<TextInput 
				style={styles.input} 
				placeholder="Car"
				value={car} 
				onChangeText={setCar} 
				//secureTextEntry 
			/> 
             <Text style = {styles.error}>{errors.car}</Text>


            <Sign/>

<TextInput 
				style={styles.input} 
				placeholder="Reason"
				value={reason} 
				onChangeText={setReason} 
				//secureTextEntry 
			/> 
            <Text style = {styles.error}>{errors.reason}</Text>


<TextInput 
				style={styles.input} 
				placeholder="Comment"
				value={comment} 
				onChangeText={setComment} 
				//secureTextEntry 
			/> 
            <Text style = {styles.error}>{errors.comment}</Text>

			<ApproveButtons/>
			
			{/* Display error messages */} 
			{/* {Object.values(errors).map((error, index) => ( 
				<Text key={index} style={styles.error}> 
					{error} 
				</Text> 
			))}  */}
            </ScrollView>
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
		marginBottom: 12, 
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
		fontSize: 18, 
		marginBottom: 12, 
	}, 
}); 

export default EndEdiFormScreen;
