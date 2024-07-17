import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { image } from './utils/images';

const InternetConnectionCheck = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleRetry = () => {
    setIsRetrying(true);
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
      setIsRetrying(false);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={!isConnected}
        onRequestClose={() => { }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Can’t open HackAplate</Text>
            <Text style={[styles.modalText, { color: '#777777', fontSize: 14 }]}>Please check your internet connection</Text>

            <Image
              resizeMode='contain'
              source={image.err404}
              style={{ height: 150, margin: 50 }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleRetry}
              disabled={isRetrying}
            >
              {isRetrying ? (
                <ActivityIndicator color="#0E522D" />
              ) : (
                <Text style={styles.buttonText}>Retry</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {

    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0E522D',
    borderRadius: 10,
    paddingHorizontal: 20,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: '100%'

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InternetConnectionCheck;
