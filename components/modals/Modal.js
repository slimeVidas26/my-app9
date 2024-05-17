import React from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Modal = ({ children, onClose }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        {children}
        {/* <Button title="X" style={styles.closeButton} onPress={onClose}/> */}


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#d4d4d4',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch'
  },
  modal: {
    //backgroundColor: 'lightGrey',
    backgroundColor: 'white',

    //marginTop:30,
    //padding: 10,
    borderRadius: 40,
    position: 'relative',
    minWidth: '95%',
    //maxWidth: 500
    height: '90%',
  },
 
});



export default Modal;