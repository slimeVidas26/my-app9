import React, { useRef } from "react";
import { StyleSheet, View,Text ,  Button } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

export const Sign = ({ onOK }) => {
  const ref = useRef();

  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature);
  };

   // Called after ref.current.readSignature() reads an empty string
   const handleEmpty = () => {
    alert("Empty signature");
  };

  const handleClear = () => {
    ref.current.clearSignature();
  };

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  };

  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

  return (
   
    <View style={styles.container}>
    
      <SignatureScreen ref={ref} onEmpty={handleEmpty} webStyle={style} />
       <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
      </View> 
    </View>
  );
};

//export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    padding: 10,
    margin:15,
    marginTop:0,

    borderColor:'black',
    borderWidth:1
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
});