import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
import { useNavigation } from '@react-navigation/native';
import data from '../constants/data'
import { addItem, selectWishlistItems } from '../features/wishListSlice';
import { useDispatch, useSelector } from 'react-redux';


const Stack = createNativeStackNavigator()
const ProductCard = () => {
 const {dinner} = data;
 




    
    const navigation = useNavigation();
    const handlePress = (id,image,name,price,desc) => {
        navigation.navigate('ProductInfo', {
         id,
         price,
         name,
         image,
         desc,
        })
      }
      
      const truncate = (str, limit) => {
        const words = str.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        } else {
          return str;
        }
      };
      
  return (
    <View style={{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        flex:1,
       padding:5
       
    }}>
        {dinner.map(({id,image,name,price,desc})=>(
  <TouchableOpacity key={id} onPress={()=>handlePress(id,image,name,price,desc)}>
  <View style={{

position:"relative",

width:windowWidth *0.45,
backgroundColor:"white",
borderRadius:10,
elevation:5,
padding:20,
margin:5

}}>
<Image 
source={image}
style={{
  height:windowHeight *0.08,
  width:"100%",
  
  
}}
/>

<Text>{name}</Text>
{/* <Text>{truncate(desc,windowWidth *0.01)}</Text> */}
<View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Entypo name='star' size={16} color={"orange"} style={{}}/>

<Text>4.9</Text>
</View>
<Text style={{fontSize:14,}}>${price}</Text>
</View>
</View>
  </TouchableOpacity>
        ))}
      
     
    
    </View>
  )
}

export default ProductCard