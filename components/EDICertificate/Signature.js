import React, { useRef , useState } from "react";
import { View, StyleSheet , Button , Text } from 'react-native';
import SignatureCanvas from 'react-native-signature-canvas';


export const Sign = ({ text, onOK }) => {

  const signatureRef = useRef();
  console.log(signatureRef.current)
  const [signature, setSign] = useState(null);
  const [empty , setEmpty] = useState('')

  const handleSignature = (signature) => {
    console.log(signature); // signature is a base64 encoded string
  };

   

  const handleClear = () => {
    console.log('Signature cleared');
  };

  const handleEmpty = () => {
    console.log("Empty");
    setEmpty('Canvas cant be empty')
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
    onOK(signature); // Callback from Component props
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };
  

  return (
    <View style={styles.container}>
      <SignatureCanvas
       ref={signatureRef}
        onOK={handleOK}
        //onEnd  = {handleEnd}
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
       <Button title="Check if Canvas is Blank" onPress={handleEmpty} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  signatureCanvas: {
    width: 375,
    height: 180,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom:30,
    borderRadius: 8, 
  },
});

// export default SignatureScreen;