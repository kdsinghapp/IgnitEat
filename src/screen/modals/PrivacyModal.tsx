import React, { useState } from 'react';
import { Modal, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/utils/colors';

const PrivacyPolicyModal = ({ modalVisible, setModalVisible }) => {

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
          <Text style={styles.title}>Privacy Policy</Text>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
            <Text style={styles.text}>
              Using our service/app requires accepting our terms and conditions. Please review them. Thank you.
       
     
              {"\n"}By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
    
              
              {"\n"}You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services in any manner that could damage, disable, overburden, or impair the Services or interfere with any other party's use of the Services.
       
              {"\n"}Some features of the Services may require you to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
              {/* Add more terms and conditions content here */}
            </Text>
          </ScrollView>
   
           
            <TouchableOpacity style={styles.button} onPress={handleAccept}>
              <Text style={styles.buttonText}>Accept</Text>
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
    height: '80%',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor:colors.btnColor,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    marginLeft: 10,
width:'90%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyModal;
