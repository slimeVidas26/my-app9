import React , {useState} from 'react';
import { Text, View,Pressable , TextInput } from 'react-native';
import { FontAwesome , Ionicons  , AntDesign} from '@expo/vector-icons';
import filter from 'lodash.filter';
import { useQuery } from "@apollo/client";
import { EDI_ORDERS_QUERY } from '../../gql/Query';


const  ModalHeader = ()=> {
  const [isModalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState('');
  const {data ,error ,  loading} = useQuery(EDI_ORDERS_QUERY);

  const [fullData, setFullData] = useState([]);
  const [title , setTitle] = useState('')
  const [info , setInfo] = useState('')

  const contains = ({orderNumber }, query) => {
    //const { first, last } = name;
 console.log('contains' , contains)
    if (orderNumber.includes(query)) {
      return true;
    }
   
    return false;
  };

  const handleSearch = text => {
    // console.log('fullData before' , fullData)

     const formattedQuery = text.toLowerCase(); 
     console.log(formattedQuery)
     const filteredData = filter(data.ediOrders, edi => {
       //console.log('user' , user)
       return contains(edi, formattedQuery);
     });
     console.log('filteredData' , filteredData);
     setModalOpen(true)
     setQuery(text);
     setFullData(filteredData)
     setTitle('Edi Certificate')
     
    // console.log('fullData after' , fullData)
      console.log('fullData.length',fullData.length)
   };

  


 return (
  <>
  <View
 style = {{
   display: 'flex',
   width:'100%',
   height:60,
   paddingHorizontal:10,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems: "center",
 }}
 >


<Pressable onPress={() => setModalOpen(!isModalOpen)}>
<Text  style={{ zIndex:1000}}><AntDesign onPress={() => setModalOpen(!isModalOpen)} name="closecircle" size={40} color="blue" /></Text>
</Pressable>



<TextInput
autoFocus={true}
//{...(query ?  autoFocus = true  : autoFocus = false)} 
keyboardType='numeric'
autoCapitalize="none"
placeHolder='Search'
autoCorrect={false}
clearButtonMode="always"
value={query}
onChangeText={queryText => handleSearch(queryText)}
style={{textAlign:"right",borderWidth:7,flex:1,fontSize:20 ,color:'#000' ,paddingHorizontal:20 , paddingVertical:10 ,borderRadius: 30,
   borderWidth: 1,
borderColor:'blue' }}
/>
</View>
{query && <View style = {{paddingLeft:250 ,paddingTop:8, height:40  }}><Text style = {{fontSize:20 , fontWeight:'bold' , color:'blue'}}>Edi Certificate</Text></View>}
</>
 )
}

export default ModalHeader ;



  
