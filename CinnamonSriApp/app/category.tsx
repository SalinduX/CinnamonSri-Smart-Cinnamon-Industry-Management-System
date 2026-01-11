import Header from '@/layout/header'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Category = () => {
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
         centertext="Category"
    /> 
      <Text>Category</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})