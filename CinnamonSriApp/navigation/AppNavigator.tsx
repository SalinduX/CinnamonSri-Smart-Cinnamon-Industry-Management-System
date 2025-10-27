import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Import your new screen
import CinnOracle_Main from '../screens/CinnOracle_Main';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator(); 

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="CinnOracle" // Sets your new UI as the first screen
    >
      {/* Your New Assessment UI */}
      <Stack.Screen 
        name="CinnOracle" 
        component={CinnOracle_Main} 
        options={{ headerShown: false }} // Hides the top bar for a cleaner look
      />

      {/* Existing Home Screen */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Ikman.lk' }} 
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;