import { Text, View,Pressable , TextInput } from 'react-native';
import { AntDesign} from '@expo/vector-icons';



const ModalHeader=({setModalOpen ,isModalOpen , query , handleSearch})=>{
  return(
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
  

  <Pressable onPress={() => s(!i)}>
<Text  style={{ zIndex:1000}}><AntDesign onPress={() => setModalOpen(!isModalOpen)} name="closecircle" size={40} color="blue" /></Text>
</Pressable>



<TextInput
autoFocus={true}
// {...(query ?  autoFocus = true  : autoFocus = false)} 
keyboardType='numeric'
autoCapitalize="none"
placeHolder='Search'
autoCorrect={false}
clearButtonMode="always"
value={query}
onChangeText={queryText =>handleSearch(queryText)}
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



  
