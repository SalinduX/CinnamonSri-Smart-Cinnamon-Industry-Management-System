import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const Index = () => {
  return (
    <View>
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