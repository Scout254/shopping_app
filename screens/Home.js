import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Products from '../components/Products'


const Home = () => {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Measure the height of the content inside ScrollView
    // and update the state with the new height
    const onContentSizeChange = (width, height) => {
      setContentHeight(height);
    };

    return () => {
      // Clean up the event listener
      ScrollView.removeEventListener('onContentSizeChange', onContentSizeChange);
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <Navbar/>
      <ScrollView contentContainerStyle={{ minHeight: contentHeight }}>
        <Banner/>
        <Products onContentSizeChange={setContentHeight}/>
      </ScrollView>
    </View>
  )
}

export default Home
