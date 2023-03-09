import { View, Text, Image, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontiso from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItems,addQuantity,reduceQuantity } from '../features/basketSlice';
import { addItem, selectWishlistItems } from '../features/wishListSlice';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const ProductInfo = ({ route }) => {
  const {id,image,name,price,desc} = route.params;      
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basket = useSelector(selectWishlistItems)
  const dispatch = useDispatch();


  const addItemToBasket =() =>{
    dispatch(addToBasket({id,name,desc,price,image}));
  }

  const addToWishList = (id, name, price, image, desc) => {
    dispatch(addItem({ id, name, price, image, desc }));
  };
  
  const handleWishlist =() =>{
    navigation.navigate('Wishlist');
  }


  
const handlePress = () => {
  navigation.navigate('Cart');
};
const renderStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Entypo name='star' size={16} color='orange' key={i}  />);
  }
  return stars;
};
  return (
    <View key={id} >
      <View style={{
        flexDirection:"row",
        marginTop:40,
        justifyContent:"space-between",
        backgroundColor:"white",
        height:60,
        alignItems:"center",
        paddingHorizontal:10,
        backgroundColor:"white",
        padding:20,
        elevation:5,
        
      }}>
     <TouchableOpacity onPress={()=>navigation.goBack()}>
     <View style={{
      
      borderRadius:10,
      height:40,
      width:40,
      

     }}>
      <IonIcons name='chevron-back' size={30}/>
      </View>
     </TouchableOpacity>
     <View style={{
      flexDirection:"row",
    
     
     }}>
     <TouchableOpacity onPress={handleWishlist}>
     <MaterialIcons name='favorite-border'  size={30} style={{paddingHorizontal:10}}/>
     <View style={{
      position:"relative",
      bottom:35,
      left:30,
      backgroundColor:"red",
      width:20,
      height:20,
      borderRadius:50
     }}>
      <Text style={{textAlign:"center",color:"white"}}>{basket.length}</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity>
      <AntDesign name='sharealt' size={30} style={{paddingHorizontal:10}}/>

     </TouchableOpacity>
     <TouchableOpacity onPress={handlePress}>

      <Fontiso name='shopping-bag' size={30} style={{paddingHorizontal:10}}/>
      <View style={{
        position:"relative",
        bottom:40,
        left:30,
        
        borderRadius:10,
        height:20,
        width:20,
        backgroundColor:"red"
      }}>
        <Text style={{textAlign:"center",color:"white"}}>{items.length}</Text>
      </View>
     </TouchableOpacity>
     </View>
      </View>
      <ScrollView>

      
      <View style={{
        backgroundColor:"white",
     
       
        width:"100%",
        padding:10,
        
        height:windowHeight *0.4
        
      }}>
      <Image source={image}
       style={{
        height:"100%",
        width:"100%",
        borderRadius:10
       
        
        }} />
      </View>
      <View  style={{
        
        
       
        width:"100%",
        padding:10
        
      }} >
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between"
      }}>
      <Text style={{fontSize:22}}>{name}</Text>
      <TouchableOpacity  onPress={() => addToWishList(id, name, price, image, desc)}>
     <MaterialIcons name='favorite-border'  size={30} style={{paddingHorizontal:10}}/>
     
     </TouchableOpacity>
      </View>
      <Text style={{fontSize:24,fontWeight:"600"}}>Description</Text>
      <Text style={{fontSize:16}}>{desc}</Text>
      <View style={{flexDirection:"row"}}>
      {renderStars(4)}
      </View>
     
      <Text style={{fontSize:24,color:"green"}}>${price}</Text>
     
      <View style={{
        width:"100%",
       
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      }}>

     
   
     <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        height:50,

      }}>
        
      
  <TouchableOpacity onPress={addItemToBasket}>
  <View style={{
      height:"100%",
      width:windowWidth *0.3,
      backgroundColor:"green",
      justifyContent:"center",
      alignItems:"center"
     }}>
     <Text>Add to cart</Text>
     </View>
  </TouchableOpacity>
     <TouchableOpacity>
     <View style={{
      height:"100%",
      width:windowWidth *0.3,
      backgroundColor:"orange",
      justifyContent:"center",
      alignItems:"center",
      marginLeft:5
     }}>
        <Text>Buy now</Text>
      </View>
     </TouchableOpacity>
      </View>
      
      </View>
     
     
      </View>
      </ScrollView>
    </View>
  );
};

export default ProductInfo;
