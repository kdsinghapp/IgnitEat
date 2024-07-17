import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RegistrationRoutes from './RegistrationRoutes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import toastConfig from '../config/customToast';
import { persistor, store } from '../redux/Store';
import InternetConnectionCheck from '../config/ConnectionCheck';


export default function AppNavigator() {
  const [isConnected, setIsConnected] = useState(true);

  // React.useEffect(() => {
  //   notificationListener();
  //   requestUserPermission();
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
          <InternetConnectionCheck>
            <NavigationContainer>
              <RegistrationRoutes />
              <Toast config={toastConfig} />
            </NavigationContainer>
            </InternetConnectionCheck>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
