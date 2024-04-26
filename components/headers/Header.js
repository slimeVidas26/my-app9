import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export const EdiHeader = ({ setModalOpen, setQuery, setFullData }) => {
  return (
    <View style={styles.header}>

       <View >
      <Ionicons onPress={() => {
        setModalOpen(true); setQuery(''); setFullData([])
      }}
        name="search-circle-sharp" size={48} color="blue" />
    </View>
    <View >
      <AntDesign onPress={() => {
        navigation.navigate('Home')
      }} name="rightcircleo"
        size={35} color="blue" />
       </View>
    </View>
  )
}



export const ModalHeader = ({ setModalOpen, isModalOpen, query, handleSearch }) => {
  return (
    <>
      <View style={styles.header}>
      <View style = {{   paddingLeft:8}}>
        <Pressable onPress={() => setModalOpen(!isModalOpen)}>
          <Text style={{ zIndex: 1000 }}>
            <AntDesign onPress={() => setModalOpen(!isModalOpen)}
              name="closecircle" size={35} color="blue" />
          </Text>
        </Pressable>
        </View>

        <View>
        <TextInput
          autoFocus={true}
          keyboardType='numeric'
          autoCapitalize="none"
          placeHolder='Search'
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          style={styles.textInput}
        />
      </View>
      </View>
      {query && <View style={styles.notification}><Text style={styles.notificationText}>Edi Certificate</Text></View>}
    </>
  )
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    //width: '100%',
    height: 60,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },

  textInput: {
    textAlign: "right",
    borderWidth: 7,
    flex: 1,
    fontSize: 20,
    color: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'blue',
    width:350
  },

  notification: {
    paddingLeft: 250,
    paddingTop: 8,
    height: 40
  },
  notificationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  }
});





