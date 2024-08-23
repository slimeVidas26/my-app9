import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import { EdiOrderDetailHeader } from '../../components/headers/Header';
import { EdiOrderDetailsTab } from '../../components/tabs/EdiOrderDetailsTab';
import { useRoute } from '@react-navigation/native';


 

const MyTabBarScreen = () =>{
  const route = useRoute();
  const { orderId } = route.params || {};  // Default to an empty object if undefined
  
  console.log('orderId from eodsn', orderId);
  
  return (
    <>
    <  EdiOrderDetailHeader/>
    <EdiOrderDetailsTab orderId={orderId} />
    </>
  );
}

export default MyTabBarScreen