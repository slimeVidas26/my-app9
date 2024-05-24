//https://www.geeksforgeeks.org/how-to-implement-form-validation-in-react-native/

import React, { useState, useEffect } from 'react'; 
import { View, TextInput, TouchableOpacity,Pressable, 
	Text, StyleSheet } from 'react-native'; 

import { Sign } from '../../components/EDICertificate/Signature';
 export function EndEdiFormScreen({navigation}) { 

    const ApproveButtons = () => {
        return (
          
          <View style={[styles.approve , { opacity: isFormValid ? 1 : 0.5 }]} disabled={!isFormValid} >
          
            <Pressable style={styles.nextButton} onPress={()=>navigation.navigate('TotoScreen')} >
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
	const [email, setEmail] = useState(''); 
    const [phone , setPhone] = useState('');
	const [password, setPassword] = useState(''); 
    const [car, setCar] = useState(''); 
    const [reason, setReason] = useState(''); 
    const [comment, setComment] = useState(''); 



	const [errors, setErrors] = useState({}); 
	const [isFormValid, setIsFormValid] = useState(false); 

	useEffect(() => { 

		// Trigger form validation when name, 
		// email, or password changes 
		validateForm(); 
	}, [name, phone, car , reason , comment]); 

	const validateForm = () => { 
		let errors = {}; 

		// Validate name field 
		if (!name) { 
			errors.name = 'Name is required.'; 
		} 

		// Validate email field 
		// if (!email) { 
		// 	errors.email = 'Email is required.'; 
		// } else if (!/\S+@\S+\.\S+/.test(email)) { 
		// 	errors.email = 'Email is invalid.'; 
		// } 

        // Validate phone field 
		if (!phone) { 
			errors.phone = 'Phone is required.'; 
		 } 
         //else if (!/\S+@\S+\.\S+/.test(phone)) { 
		// 	errors.phone = 'Phone is invalid.'; 
		// } 

		// Validate password field 
		// if (!password) { 
		// 	errors.password = 'Password is required.'; 
		// } else if (password.length < 6) { 
		// 	errors.password = 'Password must be at least 6 characters.'; 
		// } 

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
            
		} else { 
			// Form is invalid, display error messages 
			console.log('Form has errors. Please correct them.'); 
		} 
	}; 

	return ( 
		<View style={styles.container}> 
			<TextInput 
				style={styles.input} 
				placeholder="Name"
				value={name} 
				onChangeText={setName} 
			/> 
			<TextInput 
				style={styles.input} 
				placeholder="Phone"
				value={phone} 
				onChangeText={setPhone} 
			/> 
			<TextInput 
				style={styles.input} 
				placeholder="Car"
				value={car} 
				onChangeText={setCar} 
				//secureTextEntry 
			/> 

            <Sign/>

<TextInput 
				style={styles.input} 
				placeholder="Reason"
				value={reason} 
				onChangeText={setReason} 
				secureTextEntry 
			/> 

<TextInput 
				style={styles.input} 
				placeholder="Comment"
				value={comment} 
				onChangeText={setComment} 
				secureTextEntry 
			/> 
			<ApproveButtons/>
			
			{/* Display error messages */} 
			{Object.values(errors).map((error, index) => ( 
				<Text key={index} style={styles.error}> 
					{error} 
				</Text> 
			))} 
		</View> 
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
		borderWidth: 1, 
		marginBottom: 12, 
		paddingHorizontal: 10, 
		borderRadius: 8, 
		fontSize: 16, 
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
		fontSize: 20, 
		marginBottom: 12, 
	}, 
}); 

export default EndEdiFormScreen;
