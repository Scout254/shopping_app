import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <View style={{
        marginVertical:10,
    }}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        marginHorizontal:10

      }}>
        <Text>Products</Text>
        <TouchableOpacity>
        <Text style={{color:"green"}}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection:"row",
        flexWrap:"wrap",
        
      }}>
        <ProductCard  />
      </View>
    </View>
  )
}

export default Products