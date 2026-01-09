import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '@/layout/header'
import { Ionicons } from '@expo/vector-icons'

const Index = () => {
  return (
    <View>
       <Header 
       
       Left={
        <TouchableOpacity>
            <Ionicons name="menu" size={27} color="black" />
       </TouchableOpacity>
    }
         centertext="Home"
    /> 

      
      <Text>Index</Text>
      <Link href={'/category'}>Category</Link>
      <Link href={{
        pathname:"/products", params: { sort: 'new' }
      }}>Product</Link>
      <Link href={{
        pathname: '/product/[productId]',
        params: { productId: '123',
            re: 'referral',
            sal: 'summer',
         }
        }}>Single Product</Link>
        <Link href={"/product"}>Products</Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})