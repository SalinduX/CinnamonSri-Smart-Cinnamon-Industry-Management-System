import Header from '@/layout/header';
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Product = () => {

  const params = useLocalSearchParams();
  return (
    <View>
       <Header 
       
       Left={
        <Link href={'/'} asChild>
        <TouchableOpacity>
            <Ionicons name="arrow-back-circle-sharp" size={27} color="black" />
       </TouchableOpacity>
         </Link>
    }
         centertext="Product"
    /> 
      <Text>Product</Text>
      <Text>{params.sort}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})