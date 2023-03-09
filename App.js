import { View, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductInfo from "./screens/ProductInfo";

import BottomNavigation from "./components/BottomNavigation";
import ProductCard from "./components/ProductCard";
import { Provider } from "react-redux";
import { store } from "./store";
export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
        
        <Stack.Screen name="ProductInfo" component={ProductInfo}/>
        <Stack.Screen name="ProductCard" component={ProductCard}/>
        
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
