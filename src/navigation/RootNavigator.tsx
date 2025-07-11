// ================ user should also be validated too before navigating to main screen

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './routes';
import MainNavigator from './MainNavigator';
import { useAuthStore } from '../store/authStore';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const { token } = useAuthStore();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name={screens.auth} component={AuthNavigator} />
      ) : (
        <Stack.Screen name={screens.main} component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
