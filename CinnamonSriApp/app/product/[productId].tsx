import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SingleProduct = () => {

    const params = useLocalSearchParams();
    console.log(params);

    return (
    <View>
      <Text>SingleProduct</Text>
      <Text>{params.productId}</Text>
      <Text>{params.re}</Text>
      <Text>{params.sal}</Text>
    </View>
  )
}

export default SingleProduct

const styles = StyleSheet.create({})