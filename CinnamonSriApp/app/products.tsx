import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native'


const Product = () => {

  const params = useLocalSearchParams();
  return (
    <View>
      <Text>Product</Text>
      <Text>{params.sort}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})