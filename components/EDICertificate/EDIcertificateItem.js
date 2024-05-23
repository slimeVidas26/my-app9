import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


export const EDIcertificateItem = ({ item }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('EdiOrderDetailsScreenOpen')}>
      <View style={styles.listItem}>
        <View style={styles.metaInfo}>
          <Text style={styles.title}></Text>
          <Text style={styles.blueText}>{`${item.supplier}`}</Text>
        </View>

        <View style={styles.metaInfo}>
          <Text style={styles.blueText}>Boxes:{`${item.boxes}`}</Text>
          <Text style={styles.title}>Supplier Number:{`${item.supplierNumber}`}</Text>
        </View>

        <View style={styles.metaInfo}>
          <Text style={styles.blueText}>Quantity:{`${item.quantity}`}</Text>
          <Text style={styles.title}>Edi:{`${item.edi}`}</Text>
        </View>

        <View style={styles.metaInfo}>
          <Text style={styles.title}>{`${item.date}`}</Text>
          <Text style={styles.title}>Order Number: {`${item.orderNumber}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    paddingVertical: 0,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  metaInfo: {
    borderRadius: 2,
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "space-between", // main axis
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    marginBottom: 0,
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
  },

  blueText: {
    fontSize: 20,
    color: 'blue',
  }
});