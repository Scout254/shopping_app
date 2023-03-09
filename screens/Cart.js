import { View, Text, ScrollView ,Image,TouchableOpacity,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { selectBasketItems } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { addQuantity,reduceQuantity ,removeFromBasket} from '../features/basketSlice';
export default function Cart() {
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <View >

   <View style={{
    marginTop:40,
    marginHorizontal:10,
    
    
    
   }}>
    {items.length === 0 ? (
    <View >
     <View style={{
      
      justifyContent:"center",
      alignItems:"center",
      marginTop:windowHeight *0.4
     
     
     }}>
     <Image source={{uri:"https://img.freepik.com/free-icon/shopping-basket_318-502541.jpg?size=338&ext=jpg&ga=GA1.1.936022068.1678309441&semt=ais"}}
      style={{
        height:100,
        width:100,
      
        

      }}
      />
     </View>
      <Text style={{
        textAlign:"center"
      }}>Your Cart is Empty!</Text>
      <Text style={{
        textAlign:"center"
      }}>Go back and add some items.</Text>
    </View>):(
    <View style={{
     
      flexGrow:1
    }}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
       
      }}>
        <Text style={{
          fontSize:25
        }}>Shopping Cart</Text>
        <Text style={{
          fontSize:25,
          
        }}>Items<Text style={{color:"red"}}>({items.length})</Text></Text>
      </View>
       <View style={{
        flexGrow:1,
       
        
       }}>
       <ScrollView style={{
        flexGrow:1,
        
        height:windowHeight *0.9,
       
       }}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom:windowHeight *0.06}}>
    {items?.map((item)=>(
      
      <View key={item.id} style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"white",
        padding:20,
        elevation:5,
        borderRadius:10,
        marginVertical:10
       
      
      }}>
       <View>
       <Image source={item.image} style={{
          width:100,
          height:100,
        }}/>
       </View>
        <View>
        <Text>{item.name}</Text>
        
        <Text>${item.price}</Text>
        <View style={{
        flexDirection:"row",
        
      }}>
  <TouchableOpacity onPress={() => {
  console.log("Reduce quantity id:", item.id);
  dispatch(reduceQuantity({id: item.id}))
}}>

      <View style={{
          borderWidth:1,
          width:30,
          marginLeft:5,
          marginRight:5
        }}>
        <Text style={{textAlign:"center"}}>-</Text>
        </View>
      </TouchableOpacity>
        <View style={{
          borderWidth:1,
          width:30,
          marginLeft:5,
          marginRight:5,
         
          
        }}>
        <Text style={{textAlign:"center"}}>{item.quantity}</Text>

        </View>
        <TouchableOpacity onPress={() => {
  console.log("Add quantity id:", item.id);
  dispatch(addQuantity({id: item.id}))
}}>
     <View style={{
          borderWidth:1,
          width:30,
          marginLeft:5,
          marginRight:5
        }}>
        <Text style={{textAlign:"center"}}>+</Text>
        </View>
     </TouchableOpacity>
      </View>
        </View>
        <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: item.id }))}>
  <View>
    <AntDesign name='delete' size={30}/>
  </View>
</TouchableOpacity>

      </View>
   
  ))}
   <View style={{
    flexDirection:"row",
    justifyContent:"space-between"
   }}>
    <Text style={{
      fontSize:18
    }}>Total Price</Text>
    <Text style={{
      fontSize:18
    }}>${totalPrice}</Text>
   </View>
  <TouchableOpacity>
  <View style={{
    borderRadius:10,
    marginVertical:10,
    backgroundColor:"green",
    height:50,
    alignItems:"center",
    justifyContent:"center"
    
  }}>
    <Text style={{
      color:"white",
      textAlign:"center"
    }}>Proceed To Checkout</Text>
   </View>
  </TouchableOpacity>
    </ScrollView>
    
       </View>
    </View>)}
  
   </View>
    </View>
  )
}