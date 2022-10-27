import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import { Home, Settings } from '../screens';
import colors from '../helpers/colors';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          title: 'Degustus',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
          // headerRight: () => (
          //   <SettingsButton onPressFunction={() => navigation.navigate('SettingsScreen')} />
          // ),
          headerLeft: () => null
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};