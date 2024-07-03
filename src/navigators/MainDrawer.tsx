// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomDrawerContent from './components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerLabelStyle: { marginLeft: -20, color: '#333', fontSize: 15 },
          drawerActiveBackgroundColor: '#e6f7e6',
          drawerActiveTintColor: '#004d00',
          drawerInactiveTintColor: '#666',
        }}
      >
        <Drawer.Screen name="Subscription" component={HomeScreen} />
        <Drawer.Screen name="Personal Preferences" component={SettingsScreen} />
        <Drawer.Screen name="Create Cookbook" component={SettingsScreen} />
        <Drawer.Screen name="Timer Ringtone" component={SettingsScreen} />
        <Drawer.Screen name="Change Username" component={SettingsScreen} />
        <Drawer.Screen name="Change Password" component={SettingsScreen} />
        <Drawer.Screen name="Share Hackaplate" component={SettingsScreen} />
        <Drawer.Screen name="Privacy Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
