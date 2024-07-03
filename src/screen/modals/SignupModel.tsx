import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/utils/colors';

const SignupModel = ({ modalVisible, setModalVisible }) => {

  const handleAccept = () => {
    setModalVisible(false);
    // Handle acceptance logic
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.text}>
            Using our service/app requires accepting our terms and conditions. Please review them. Thank you.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleAccept}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.skipButton}
            onPress={handleAccept}
          >
            <Text style={styles.skipButtonText}>Skip for now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    height: '25%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.btnColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginLeft: 10,
    marginTop: 10,
    width: '90%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  skipButton: {
    marginTop: 30,
    height: 20,
  },
  skipButtonText: {
    color: colors.btnColor,
    fontWeight: 'bold',
  },
});

export default SignupModel;
