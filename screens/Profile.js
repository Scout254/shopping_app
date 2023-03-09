import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import IonsIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {useNavigation} from '@react-navigation/native'
const Profile = () => {
  const navigation = useNavigation();

  
  return (
    <View style={{
      
    }}>
      <View style={{
        flexDirection:"row",
        marginTop:40,
        justifyContent:"space-between"
      }}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Entypo name='chevron-thin-left' size={30}/>
      </TouchableOpacity>
      <Text style={{
        fontSize:25
      }}>Settings</Text>
     <TouchableOpacity>
     <EvilIcons name='share-apple' size={40}/>
     </TouchableOpacity>
      </View>
    <View style={{
      marginHorizontal:20
    }}>
    <View style={{
      flexDirection:"row",
      alignItems:"center"
    }}>
   <TouchableOpacity>
   <Image source={{uri:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"}}
      style={{
        height:100,
        width:100,
        borderRadius:50
      }}
      />
   </TouchableOpacity>
      <View style={{
        paddingLeft:20
      }}>
      <Text>Michael Mutinda</Text>
      <Text>mutinda@gmail.com</Text>
      </View>
    </View>
      <Text style={{
        fontSize:22
      }}>Account Information</Text>

      <TouchableOpacity>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20
       
      }}>
      <IonsIcons name='person-outline' size={30}/>
      <Text style={{ paddingLeft:10}}>Profile Data</Text>
      </View>
      </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20
       
      }}>
      <FontAwesome name='money' size={30}/>
      <Text style={{ paddingLeft:10}}>Billing &amp; Payments</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20
       
      }}>
      <AntDesign name='tagso' size={30}/>
      <Text style={{ paddingLeft:10}}>My Orders</Text>
      </View>
    </TouchableOpacity>
      <TouchableOpacity>
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20
       
      }}>
      <FontAwesome name='address-card-o' size={30}/>
      <Text style={{ paddingLeft:10}}>Addresses</Text>
      </View>
      </TouchableOpacity>
    <TouchableOpacity>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20
       
      }}>
      <AntDesign name='customerservice' size={30}/>
      <Text style={{ paddingLeft:10}}>Customer Support</Text>
      </View>
    </TouchableOpacity>
      
    
      
      
     
     <TouchableOpacity>
     <View style={{
        backgroundColor:"black",
        justifyContent:"center",
        height:50,
        borderRadius:10
        
      }}>
        <Text style={{color:"white",textAlign:"center"}}>Logout</Text>
      </View>
     </TouchableOpacity>
    </View>
    </View>
  )
}

export default Profile