import { View, Text } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import WishList from '../screens/WishList'
import Cart from '../screens/Cart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'




const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const items = useSelector(selectBasketItems);
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
          return <Feather name={iconName} size={size} color={color} />;
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart';
          return <EvilIcons name={iconName} size={size} color={color} />;
        } else if (route.name === 'Wishlist') {
          iconName = focused ? 'favorite' : 'favorite-border';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
          return <IonIcons name={iconName} size={size} color={color} />;
        }
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Wishlist" component={WishList} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
  )
}

export default BottomNavigation