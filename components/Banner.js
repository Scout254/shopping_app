import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Banner = () => {
  return (
    <View style={{
      position:"relative",
      
    }}>
      <View style={{
        opacity:0.75
      }}>
        <ImageBackground
          source={{uri:"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
          style={{
            width: windowWidth,
            height: windowHeight * 0.3,
          }}
        />
      </View>
      <View style={{
  position:"absolute",
  top:"10%",
  left:"5%",
  right:"5%",
}}>
  <Text style={{
    fontSize:windowWidth * 0.05,
  }}>#Fashion Day</Text>
  <Text style={{
    fontSize:windowWidth * 0.15,
    fontWeight:"900",
    // marginTop:windowHeight * 0.02,
  }}>80% OFF</Text>
  <Text style={{
    fontSize:windowWidth * 0.05,
    // marginTop:windowHeight * 0.02,
  }}>Discover fashion that suits your style</Text>
  <View style={{
    backgroundColor:"black",
    height:windowHeight * 0.05,
    width:windowWidth * 0.4,
    justifyContent:"center",
    borderRadius:windowWidth * 0.02,
    // marginTop:windowHeight * 0.02,
  }}>
    <TouchableOpacity>
      <Text style={{textAlign:"center",color:"white", fontSize:windowWidth * 0.04}}>CHECK THIS OUT</Text>
    </TouchableOpacity>
  </View>
</View>

    </View>
  )
}

export default Banner