import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, selectWishlistItems } from '../features/wishListSlice'
import { addToBasket, selectBasketItems } from '../features/basketSlice'


const WishList = () => {

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
const basket = useSelector(selectWishlistItems)
const items = useSelector(selectBasketItems)
const dispatch = useDispatch();

const addItemToBasket = (item) => {
  dispatch(addToBasket(item));
}

const handleRemoveItem = (itemId) => {
  dispatch(removeItem({ itemId }));
};
  return (
<View style={{
  paddingHorizontal:10
}}>

  <View style={{
   
    }}>
    {basket.length === 0 ? (
      <View style={{
        marginTop:windowHeight * 0.3,
        
      }}>
        
       <Image source={{uri:"https://www.pavejewelers.com/assets/images/empty-wishlist.png"}}
       style={{
        height:windowHeight *0.3,
        width:"100%"
       }}
       />

   <Text style={{fontSize:25,textAlign:"center",marginTop:windowHeight *0.01}}>Your WishList is Empty!</Text>
      </View>
    ):(
      <View>
        <View style={{
    flexDirection:"row",
    marginTop:40,
    justifyContent:"space-between",
    alignItems:"center"
  }}>
    <Text style={{fontSize:25}}>WishList Items</Text>
    <Text style={{fontSize:25}}>Items<Text style={{color:"red"}}>({basket.length})</Text></Text>
  </View>
<View>
      
      <ScrollView 
      contentContainerStyle={{paddingBottom:windowHeight *0.02}} 
      showsVerticalScrollIndicator={false}
      
      style={{
      
        height:windowHeight *0.9
      }}
      >
      {basket.map((item)=>(
       <View key={item.id} style={{
        
        
        borderRadius:10,
        padding:20,
        backgroundColor:"white",
        elevation:5,
        marginVertical:10
       }}>
         <Image source={item.image} style={{
           height:windowHeight *0.4,
           width:"100%"
         }}/>
       <Text style={{fontSize:22,fontWeight:"600"}}>{item.name}</Text>
       <Text style={{color:"green",fontSize:22}}>${item.price}</Text>
       <Text style={{fontSize:16}}>{item.desc}</Text>
       
      <View style={{
       flexDirection:"row",
       width:"100%",
       justifyContent:"space-between",
       alignItems:"center",
       
      }}>
    <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
      <View style={{
       height:40,
       backgroundColor:"orange",
       width: windowWidth *0.40,
       alignItems:"center"
              
      }}>
       <Text style={{textAlign:"center"}}>Remove from wishlist</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addItemToBasket(item)}>
      <View style={{
       height:40,
       backgroundColor:"green",
       width: windowWidth *0.38,
       alignItems:"center",
      }}>
       <Text style={{textAlign:"center"}}>Add to cart</Text>
      </View>
      </TouchableOpacity>
      </View>
      
 
       </View>
     ))} 
      </ScrollView>
   </View>
      </View>
    )}
  </View>
  
</View>
  )
}

export default WishList