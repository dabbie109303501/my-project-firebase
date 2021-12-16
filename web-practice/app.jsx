import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './First';
import Second from './Second';
import Third from './Third';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ffd461' } }}>
        <Stack.Screen name="Home" component={First} />
        <Stack.Screen name="Vote" component={Second} />
        <Stack.Screen name="Result" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
