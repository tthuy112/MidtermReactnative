import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import categoryList from './screens/categoryList';
import myProfile from './screens/myProfile';
import productDetail from './screens/productDetail';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Profile" component={myProfile} />
      <Tab.Screen name="Category" component={categoryList} />
      <Tab.Screen name="Detail" component={productDetail} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}