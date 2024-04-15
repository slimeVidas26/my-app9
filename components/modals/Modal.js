import React from 'react';
import {View,StyleSheet , Button } from 'react-native'

const Modal = ({ children, onClose }) =>{
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        {children}
        <Button style={styles.closeButton} onPress={onClose}>X</Button>
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        position: 'relative',
        width: '80%',
        maxWidth: '500px'
      },
      closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer'
      }
  });



export default Modal;