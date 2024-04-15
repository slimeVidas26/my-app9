import React, { useState } from 'react';
import Modal from "../../components/modals/Modal";
import {  Button , Text , View } from 'react-native'




const EDICertificate = ({navigation}) => {

  const [isModalOpen, setModalOpen] = useState(false);
 

  return (
    <View>
    <Button  title="Press Me" onPress={() => setModalOpen(true)}/>

    {isModalOpen && (
      <Modal onClose={() => setModalOpen(false)}>
        <Text>Modal Title</Text>
        <Text>This is modal content.</Text>
      </Modal>
    )}

</View>

  )

  

 

}


export default EDICertificate