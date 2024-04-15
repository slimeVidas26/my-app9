import React, { useState } from 'react';
import Modal from "../../components/modals/Modal";
import {  Button , Text } from 'react-native'




const EDICertificate = ({navigation}) => {

  const [isModalOpen, setModalOpen] = useState(true);


    <Button onPress={() => setModalOpen(true)}>Open the Modal</Button>

    {isModalOpen && (
      <Modal onClose={() => setModalOpen(false)}>
        <Text>Modal Title</Text>
        <Text>This is modal content.</Text>
      </Modal>
    )}

 

}


export default EDICertificate