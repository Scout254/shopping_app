import { View, Text, TextInput, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import { selectWishlistItems } from '../features/wishListSlice'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Navbar = () => {

  const items = useSelector(selectWishlistItems)
  const navigation = useNavigation();

  const handlePress =() =>{
    navigation.navigate('Wishlist')
  }
  return (
    <View style={{
        marginTop:windowHeight *0.04,
        flexDirection:"row",
        padding:10,
        width:windowWidth,
        justifyContent:"space-between", 
       borderRadius:10,
       backgroundColor:"white",
       padding:20,
       elevation:5
    }}>
       <View style={{
       
       
       
        flexDirection:"row",
        alignItems:"center",
        height:40,
     
     
        borderRadius:10,
       borderWidth:2
      
        
       }}>
        <EvilIcons name='search' size={28} 
        style={{
         position:"relative",
         
        }}/>
        <TextInput placeholder='search'
        style={{
         height:"100%",
         width:windowWidth *0.5,
        
        }}
        />
       </View>
        <View style={{
            flexDirection:"row",
            width:100,
            justifyContent:"space-between",
           
        }}>
       <TouchableOpacity>
       <View style={{flexDirection:"row"}}>
       <Ionicons name='notifications-outline' size={30}/>
       <View style={{
        position: "relative",
        bottom: 3,
        right: 18,
        borderRadius: 50,
        height: 20,
        width: 20,
        borderWidth: 1,
        backgroundColor:"red"
       
       
      }}>
       <Text style={{textAlign:"center",color:"white",fontSize:12}} >1</Text>
       </View>

       </View>
       </TouchableOpacity>
       
        <TouchableOpacity onPress={handlePress}>
       <View style={{flexDirection:"row"}}>
       <AntDesign name='message1' size={30}/>
       <View style={{
        position: "relative",
        bottom: 3,
        right: 18,
        borderRadius: 50,
        height: 20,
        width: 20,
        borderWidth: 1,
        backgroundColor:"red"
       
       
      }}>
       <Text style={{textAlign:"center",color:"white",fontSize:12}} >16</Text>
       </View>

       </View>
       </TouchableOpacity>
        </View>
    </View>
  )
}

export default Navbar