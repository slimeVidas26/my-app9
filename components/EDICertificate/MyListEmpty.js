
import {View , StyleSheet , Text} from 'react-native'

 export const MyListEmpty = ({message}) => {
    return (
    <View style={{flex:1}}> 
    <Text style={styles.item}>{message}</Text>
  </View> 

    )
  }

  const styles = StyleSheet.create({
  
      item:{
        fontSize:30,
        color:'blue',
          alignSelf: 'center',
          marginTop:250
    }           
  });