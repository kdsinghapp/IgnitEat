// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false, 
          drawerLabelStyle: { marginLeft: -20, color: '#333', fontSize: 15 },
          drawerActiveBackgroundColor: '#e6f7e6',
          drawerActiveTintColor: '#004d00',
          drawerInactiveTintColor: '#666',
        }}
      >
        <Drawer.Screen name="TabNavigator" component={TabNavigator} />
       
      </Drawer.Navigator>
   
  );
}
