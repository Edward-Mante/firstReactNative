import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import login from './screens/login';
import home from './screens/home';
import Cart from './screens/cart';

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{ flex: 1, }}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
        <MainNavigator.Screen name="cart" component={Cart} /> 
          <MainNavigator.Screen name="home" component={home} /> 
          <MainNavigator.Screen name="login" component={login} />
        </MainNavigator.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
