import React from 'react';
import { Text, StyleSheet, Pressable , View } from 'react-native';

export default function EdiButton(props) {
  const { onPress,backgroundColor , title } = props;
  return (

   
    
    <Pressable
    style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1.0 },
        styles.button
      ]}
      onPress={() => console.log('Todo Pressed')}>
        <View style={styles.circle}>
         <Text style={styles.text}>25</Text>
        </View>
      <Text style={styles.textTodo}>{title}</Text>
      
    </Pressable>
  );
}



const styles = StyleSheet.create({
  button: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    elevation: 3,
    width:'50%',
    backgroundColor:'blue',
    zIndex:100
  },
  text: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
  },
  textTodo: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  circle :{
    borderRadius: 50,
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor:'white',
    //border: '3px solid #000',
    //color: '#000',
    textAlign: 'center',
    //font: '32px Arial, sans-serif'
   
  },
});